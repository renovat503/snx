import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Select
  } from '@chakra-ui/react'
import { Box,Button ,Image,Text,Badge} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const username = localStorage.getItem('username');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    function handleAddToCart(){

        

        onClose();
        toast({
            title: 'Success ',
            description: "Product added to cart.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position : 'top',
          })
    }
    return (
        <>
                    <div className="col margintwo" >
                        <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                            <Image onClick={onOpen} src={props.image} borderRadius="7"/>
                            <Box mt="2"><Text fontWeight="500" fontSize="14">{props.name}</Text></Box>
                            <Text fontSize="12"  color="gray.400">{props.description}</Text>
                            <Box mt="0.5" display="flex">
                                <Text fontWeight="500" color="gray.500" fontSize="14">${props.price}</Text>
                                {(props.numberInStock === 0) ? <Badge fontSize="9" colorScheme="red" ml="2"><Text mt="1">out of stock</Text></Badge> : <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">in stock</Text></Badge>}
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text fontSize="10" fontStyle="italic" color="gray.400">by Renova</Text>
                                <Box display="flex"><TiStarFullOutline color="black"/><Text ml="1" fontSize="12">4.8</Text></Box>
                            </Box>
                        </Box>
                    </div>

                    <Modal size="6xl" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Product Details</ModalHeader>
                        <ModalCloseButton bg="black" color="white"/>
                        <ModalBody>
                            <div className='row'>
                        <div className="col margintwo" >
                                <Image minW="300px" src={props.image}/>
                        </div>
                        <div className="col margintwo" >
                            <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                                <Box mt="2"><Text fontWeight="500" fontSize="14">{props.name}</Text></Box>
                                <Text fontSize="12" color="gray.400">{props.description}</Text>
                                    <Box mt="0.5" display="flex">
                                        <Text fontWeight="500" color="gray.500" fontSize="14">${props.price}</Text>
                                        <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">in stock</Text></Badge>
                                    </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Text fontSize="10" fontStyle="italic" color="gray.400">by Renova</Text>
                                    <Box display="flex"><TiStarFullOutline color="black"/><Text ml="1" fontSize="12">4.8</Text></Box>
                                </Box>
                                <Accordion>
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
                            </Box>
                        </div>
                        </div>
                        </ModalBody>

                        <ModalFooter>
                            {username ? <Button onClick={handleAddToCart}  bg="black"colorScheme="blackAlpha">Make Offer</Button> : <Link to="/Login"><Button  bg="black"colorScheme="blackAlpha" >Sign in to Make Offer</Button></Link>}

                        </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
     );
}
 
export default Product;