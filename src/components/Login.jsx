import {React,Component} from "react";
import {Box,Input,Container,InputGroup,InputRightElement,Button,Tooltip,Alert,AlertIcon,AlertTitle,AlertDescription} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link,Navigate } from "react-router-dom";
import Joi from "joi-browser";

class Login extends Component {

    state = {
        account:{username:"",password:""},
        errors: {},
        logged :false
    }

    schema = {
        username : Joi.string().required(),
        password : Joi.string().required(),
    };

    handleChange = ({currentTarget : input}) =>{
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({account})
       };

       handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors : errors || {}});
        console.log(errors);
        if(errors) return;

        //Call the server
        console.log("Submitted");
   }

       validate = () =>{
        const result = Joi.validate(this.state.account,this.schema,{abortEarly :false});
 
        const errors = {};
 
        const {account} = this.state;
        if(account.username.trim() === "")
        errors.username = "Username is required";
 
        if(account.password.trim() === "")
        errors.password = "Password is required";

        if(account.username.trim()  !== "usr" || account.password.trim() !== "psw")
        errors.submit = "Incorrect Username of password";
 
        return Object.keys(errors).length === 0 ? null : errors;
 
    }
        
    render(){
    return ( 
        <>
        <Container h="100vh" maxW="container.lg">
            <Box  mt="40" display="flex" justifyContent="center" >
                <Box mt="15"maxW="400">
                    <Box fontSize="35" fontWeight="800" display="flex" justifyContent="center">Login to ShoeBox </Box>
                    <Box fontSize="12" display="flex" justifyContent="center">Don't have an account ?<Link to="/register"> Sign up here.</Link> </Box>
                    <Tooltip hasArrow label={this.state.errors.username} bg='red.600'>
                    <Input borderColor = {(this.state.errors.username)? "red.600" : ""}
                        mt="6"
                         placeholder='Enter username'
                         onChange = {this.handleChange}
                          _placeholder={{ fontSize: '12',fontStyle: 'italic' }}
                          size='md' 
                          width="auto" 
                          htmlSize="40"
                          value = {this.state.account.username} 
                          name = "username"/>
                          </Tooltip>
                          
                    <InputGroup mt="3" size='md'>
                        <Tooltip hasArrow label={this.state.errors.password} bg='red.600'>
                        <Input borderColor = {(this.state.errors.password)? "red.600" : ""}
                            value = {this.state.account.password} 
                            name = "password"
                            type="password"
                            onChange = {this.handleChange}
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

                        <Link to="/collection"><Button mt="3"
                                w="100%"
                                color="white" 
                                rightIcon={<IoIosArrowForward />} 
                                bg="black"
                                >
                            Log in
                        </Button></Link>
                        <Box fontSize="15" fontWeight="700" mt="4" display="flex" justifyContent="center">Forgot Password ?</Box>
                        <Box mt="4">

                        {(this.state.errors.submit) &&
                        <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{this.state.errors.submit}</AlertTitle>
                        </Alert>
                        }

                        </Box>
                </Box>
            </Box>
        </Container>
        </>
     );
}
}
 
export default Login;