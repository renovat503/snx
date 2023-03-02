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
    AccordionIcon,
  } from '@chakra-ui/react'
import { Box,Button ,Image,Text,Badge} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const SliderProduct = (props) => {
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
                    <Link to={`/sneaker/${props.id}`}><div className="col margintwo" >
                        <Box p="2" mt="2" mb="4" w="300px" borderRadius="7" h="95%" bg="white" position="relative">
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
                    </div></Link>
        </>
     );
}
 
export default SliderProduct;