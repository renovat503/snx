import {React,Component} from "react";
import {Box,Input,Container,InputGroup,Button,Checkbox,Tooltip} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
  
class Register extends Component {

   state = {
       account:{username:"",password:"",passwordTwo:""},
       errors: {}
   }

   schema = {
       username : Joi.string().required(),
       password : Joi.string().required(),
   };

   validate = () =>{
       const result = Joi.validate(this.state.account,this.schema,{abortEarly :false});

       const errors = {};

       const {account} = this.state;
       if(account.username.trim() === "")
       errors.username = "Username is required";

       if(account.password.trim() === "")
       errors.password = "Password is required";

       if(account.passwordTwo.trim() !== account.password.trim())
       errors.passwordTwo = "Your password does not Match";

       return Object.keys(errors).length === 0 ? null : errors;

   }

   handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors : errors || {}});
        console.log(errors);
        if(errors) return;

        //Call the server
        console.log("Submitted");
   }

   handleChange = ({currentTarget : input}) =>{

    const account = {...this.state.account}
    account[input.name] = input.value;
    this.setState({account})
   };

    render(){

    return ( 
        <>
        <Container h="100vh" maxW="container.lg">
            <Box  mt="40" display="flex" justifyContent="center" >
                <Box mt="15"maxW="400">
                    <Box fontSize="35" fontWeight="800" display="flex" justifyContent="center">Join ShoeBox today </Box>
                    <Box fontSize="12" display="flex" justifyContent="center"><Link to="/login" exact>Have an account already? Log in here.</Link> </Box>
                    <Tooltip hasArrow label={this.state.errors.username} bg='red.600'>
                    <Input borderColor = {(this.state.errors.username)? "red.600" : ""}
                            mt="6"
                            name ="username" 
                            value={this.state.account.username} 
                            onChange={this.handleChange} 
                            placeholder='Enter username' 
                            _placeholder={{ fontSize: '12',fontStyle: 'italic' }}
                            size='md' 
                            width="auto" 
                            htmlSize="40" />
                    </Tooltip>
                    <InputGroup mt="3" size='md'>
                    <Tooltip hasArrow label={this.state.errors.password} bg='red.600'>
                        <Input borderColor = {(this.state.errors.password)? "red.600" : ""}
                            pr='4.5rem'
                            type={'password'}
                            name="password"
                            value={this.state.account.password}
                            onChange = {this.handleChange}
                            placeholder='Enter password'
                            _placeholder={{ fontSize: '12',fontStyle: 'italic'  }}
                        />
                        </Tooltip>
                        </InputGroup>
                        <InputGroup mt="3" size='md'>
                        <Tooltip hasArrow label={this.state.errors.passwordTwo} bg='red.600'>
                        <Input borderColor = {(this.state.errors.passwordTwo)? "red.600" : ""}
                            pr='4.5rem'
                            type={'password'}
                            name="passwordTwo"
                            value={this.state.account.passwordTwo}
                            onChange = {this.handleChange}
                            placeholder='Repeat password'
                            _placeholder={{ fontSize: '12',fontStyle: 'italic'  }}
                        />
                        </Tooltip>
                        </InputGroup>
                        <Button mt="3"
                                w="100%"color="white"
                                rightIcon={<IoIosArrowForward />} 
                                bg="black"
                                onClick={this.handleSubmit}
                                >
                            Sign up
                        </Button>
                        <Box mt="4" display="flex" justifyContent="center">
                        <Checkbox  colorScheme="gray" defaultChecked>
                            <Box fontSize="12">I agree to the Terms of Service and Privacy Policy.</Box>
                        </Checkbox>
                        </Box>
                </Box>
            </Box>
        </Container>
        </>
     );
}
}
 
export default Register;