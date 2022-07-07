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
//import { TiStarFullOutline } from 'react-icons/ti';

const CollectionProduct = (props) => {
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
                                {(props.numberInStock === 0) ? <Badge fontSize="9" colorScheme="red" ml="2"><Text mt="1">Off Market</Text></Badge> : <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">Accepting offers</Text></Badge>}
                            </Box>
                        </Box>
                    </div>

                    <Modal size="6xl" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Prodcut Details</ModalHeader>
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
                                        <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">Accepting offers</Text></Badge>
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
                                             <Button w="80px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">7W / 8.5 M</Button>
                                             <Button w="80px"  mr="2"size="xs" colorScheme='' variant="outline">7.5W / 9 M</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">7.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">8</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">8.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">9</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">9.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">10</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">10.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">11</Button>
                                             
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
                            <Button  bg="black"colorScheme="blackAlpha" onClick={handleAddToCart}>Save changes</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
     );
}
 
export default CollectionProduct;