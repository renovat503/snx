import {Box,Divider,Image,Badge,Select,Text} from "@chakra-ui/react";
import bottle from '../assets/bottle.jpg';
import { AiFillDelete } from 'react-icons/ai';

const ProductInCart = ({name,description,id,price,onDelete,imageUrl}) => {
    return ( 
        <>
        <Divider color="gray.100" orientation='horizontal' mt="4" />
            <Box mt="5" display="flex"width="100%">
                <Box mr="3"w="20%">
                    <Image  src={imageUrl} w="100%" borderRadius="7"/>
                </Box>
                <Box w="80%">
                    <Box  display="flex" justifyContent="space-between">
                        <Box fontWeight="600" fontSize="18" color="gray.500">{name}</Box>
                        <Box display="flex" color="gray.400" ml="20" mt="2" >
                        <Box ml="3" mt="1"><AiFillDelete ml="2" size="16"/></Box>
                        <Text ml="1" fontSize="16" onClick={onDelete}>Delete</Text>
                    </Box>
                    </Box>
                    <Box color="gray.400" fontSize="12" >{description}</Box>
                    <Box display="flex" mt="1">
                        <Box color="gray.400" fontSize="12" >${price}</Box>
                        <Badge borderRadius="6"ml="3" variant='subtle' colorScheme='red'><Text fontSize="10" mt="0.5">Out of stock</Text></Badge>
                    </Box>
                </Box>
            </Box>
        </>
     );
}
 
export default ProductInCart;