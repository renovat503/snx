import React from "react";
import { Button ,Container,Box,Avatar} from "@chakra-ui/react";
import '../styles/cart.css';
import { BiShoppingBag } from 'react-icons/bi';
//import { MdAdd } from 'react-icons/md'
import { Link } from "react-router-dom";

const Navigation = () => {

    const loggedin = 0;

    function checkLogin (){

        if(loggedin === 0) return <Box display="flex" mt="3">
                                    <Link to="/Login"><Button size="sm"mr="25px" colorScheme='black' variant='outline'>Login</Button></Link>
                                        <div className="cart">
                                        <Link to="/Cart"><BiShoppingBag color="White"/></Link>
                                        </div>
                                    </Box>

         return <Box display="flex" mt="3">
                 <Avatar mr = "3" size="sm" name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    <div className="cart">
                        <Link to="#"><BiShoppingBag size = "20"color="White"/></Link>
                    </div>
                </Box>                           

    }
    return ( 
        <React.Fragment>
            <Container paddingBottom="10px" bg="gray.100" maxW="xxl">
                <Container maxW="container.xl">
                    <Box display="flex" justifyContent="space-between">
                    <Link to="/"><Box mt="3" fontWeight="900">ShoeBox.</Box></Link>
                    {checkLogin()}
                    </Box>
                </Container>
             </Container>
        </React.Fragment>
     );
}
 
export default Navigation;