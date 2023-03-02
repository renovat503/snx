import {useDisclosure} from '@chakra-ui/react';
import { Box,Button ,Image,Text,Badge} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom';

const SearchResult = (props) => {

        const data = props;
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
        <Link to={`sneaker/${props.sneaker._id}`}><Box onClick={onOpen} m={3}display="flex" justifyContent="space-between">
                                                            <Box display="flex">
                                                            <Image onClick={onOpen} mr="30px" borderRadius="12px" w="100px"src={data.image}/>
                                                            <Box>
                                                                <Box>{data.name}</Box>
                                                                <Box color="gray.400" fontSize="11px">{data.description}</Box>
                                                            </Box>
                                                            </Box>
                                                            <Box mr="10px">
                                                                <BsFillArrowRightCircleFill mt="15px" mr="20pxpx" color="black" fontSize="20px"/>
                                                            </Box>
                                                         </Box></Link>
             
</>
        
     );
}

export default SearchResult;