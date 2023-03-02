import {React,Component} from "react";
import {Box,Input,Container,InputGroup,InputRightElement,Button,Tooltip,Alert,AlertIcon,AlertTitle,AlertDescription} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import {signInWithGoogle} from '../firebase-config';
import { useNavigate ,Redirect,Link} from "react-router-dom";

const Login = () => {  

    const navigate = useNavigate();
    function handleLogin (){
         signInWithGoogle();
        
    }
    return ( 
        <>
        <Container h="100vh" maxW="container.lg">
            <Box  mt="40" display="flex" justifyContent="center" >
                <Box mt="15"maxW="400">
                    <Box fontSize="35" fontWeight="800" display="flex" justifyContent="center">Login to ShoeBox </Box>
                    <Box fontSize="12" display="flex" justifyContent="center">Don't have an account ?<Link to="/register"> Sign up here.</Link> </Box>
                    <Tooltip hasArrow label="" bg='red.600'>
                    <Input borderColor = ""
                        mt="6"
                         placeholder='Enter username'
                          _placeholder={{ fontSize: '12',fontStyle: 'italic' }}
                          size='md' 
                          width="auto" 
                          htmlSize="40"
                          name = "username"/>
                          </Tooltip>
                          
                    <InputGroup mt="3" size='md'>
                        <Tooltip hasArrow label="" bg='red.600'>
                        <Input 
                            name = "password"
                            type="password"
                            onChange = ""
                            pr='4.5rem'
                            placeholder='Enter password'
                            _placeholder={{ fontSize: '12',fontStyle: 'italic'  }}
                        />
                        </Tooltip>
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm'>
                            </Button>
                        </InputRightElement>
                        </InputGroup>

                        <Button mt="3"
                                w="100%"
                                color="white" 
                                rightIcon={<IoIosArrowForward />} 
                                bg="black"
                                disabled
                                >
                            Log in
                        </Button>
                        <Button mt="3"
                                w="100%"
                                color="white" 
                                rightIcon={<IoIosArrowForward />} 
                                bg="black"
                                onClick={handleLogin}
                                >
                            Log in With Google
                        </Button>
                        <Box fontSize="15" fontWeight="700" mt="4" display="flex" justifyContent="center">Forgot Password ?</Box>
                        <Box mt="4">
                        </Box>
                </Box>
            </Box>
        </Container>
        </>
     );
}
 
export default Login;