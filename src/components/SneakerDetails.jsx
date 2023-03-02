
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Divider,
    Flex,
    useDisclosure,
    Center,Select
  } from '@chakra-ui/react'
import { Box,Button ,Image,Text,Badge} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useParams ,Link} from 'react-router-dom'
import { getSneaker } from '../services/fakeSneakersService';
import { getSneakers } from '../services/fakeSneakersService';
import SliderProduct from './SliderProduct';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SneakerDetails = (props) => {

    const username = localStorage.getItem('username');

    const RelatedProducts = getSneakers();
    const { id } = useParams();
    const sneaker = getSneaker(id);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    function handleSubmitOffer(){

        

        onClose();
        toast({
            title: 'Success ',
            description: "Offer Sent",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position : 'top',
          })
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    return ( 
       <Container mt="100px" mb="100px" maxW="container.xl">
        <div className='row'>
        <div className="col margintwo" >
                <Image minW="300px" src={sneaker.imageURL}/>
        </div>
        <div className="col margintwo" >
            <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                <Box mt="2"><Text fontWeight="500" fontSize="14">{sneaker.name}</Text></Box>
                <Text fontSize="12" color="gray.400">{sneaker.description}</Text>
                    <Box mt="0.5" display="flex">
                        <Text fontWeight="500" color="gray.500" fontSize="14">${sneaker.price}</Text>
                        <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">SOLD OUT</Text></Badge>
                    </Box>
                <Accordion mt="3">
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={14} color="black"fontWeight={600}>
                            Size
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Select size="md" variant='filled' placeholder='Select size'>
                                            <option value='option1'>7 W / 8.5 M</option>
                                            <option value='option2'>7.5 W / 9 M</option>
                                            <option value='option3'>8 W / 9.5 M</option>
                                            <option value='option3'>8.5 W / 10 M</option>
                                            <option value='option3'>9 W / 10.5 M</option>
                                            <option value='option3'>9.5 W / 11 M</option>
                                            <option value='option3'>10 W / 11.5 M</option>
                                            <option value='option3'>10.5 W / 12 M</option>
                                            </Select>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'fontSize={14}color="black" fontWeight={600}>
                            Color
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box display="flex">
                                <Box borderRadius="50%"  w="30px" h="30px" bg="black" ml={2}/>
                                <Box borderRadius="50%"  w="30px" h="30px" bg="green" ml={2}/>
                                <Box borderRadius="50%"  w="30px" h="30px" bg="blue" ml={2}/>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'fontSize={14}color="black"fontWeight={600}>
                            Description
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'fontSize={14}color="black"fontWeight={600}>
                            Delivery & return
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                    <Box mt="20px">
                    {username ? <Button  bg="black"colorScheme="blackAlpha" onClick={handleSubmitOffer}>Make Offer</Button> : <Link to="/Login"><Button  bg="black"colorScheme="blackAlpha" >Sign in to Make Offer</Button></Link>}
                    </Box>
            </Box>
        </div>
        </div>
        <Divider mt="100px" color="gray.300"/>
        <Box>
        <Text mt="20px"> Related Products </Text>
        <Slider {...settings}>
                {RelatedProducts.map(sneaker => <SliderProduct key={sneaker._id} id={sneaker._id}  name={sneaker.name}
                                                        description={sneaker.description} 
                                                        price={sneaker.price}
                                                        image={sneaker.imageURL}
                                                        numberInStock={sneaker.numberInStock}/>)} 
                                                        
                                        
                                                        
                
        </Slider>
      </Box>
        </Container>
     );
}
 
export default SneakerDetails;