import React from "react";
import { Button ,Container,Box,Image} from "@chakra-ui/react";
import '../styles/cart.css';
import { BiShoppingBag } from 'react-icons/bi';
const Navigation = () => {
    return ( 
        <React.Fragment>
            <Container className="footer" paddingBottom="10px" bg="gray.100" maxW="xxl">
                <Container maxW="container.xl">
                    <Box display="flex" justifyContent="space-between">
                    <Box mt="4" fontSize="12" fontWeight="200">© 2022 ShoeBox. All rights reserved</Box>
                    <Box display="flex" mt="3">
                        <Box  mt="1" fontSize="12" fontWeight="500" mr="5">About</Box>
                        <Box mt="1" fontSize="12" fontWeight="500" mr="5">Terms</Box>
                        <Box mt="1" fontSize="12" fontWeight="500" mr="5">Privacy</Box>
                        <Box mt="1" fontSize="12" fontWeight="500">Careers</Box>
                    </Box>
                    </Box>
                </Container>
             </Container>
        </React.Fragment>
     );
}
 
export default Navigation;