import React ,{useState} from "react";
import SearchResult from "./SearchResult";
import {useDisclosure} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Button ,
    Container,
    Box,Avatar,
    InputGroup,
    InputLeftElement,
    Input,
    Image,
    Text,
    Alert,
    AlertIcon,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem

} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import {MdNotifications} from 'react-icons/md';
import { SearchIcon,AddIcon,HamburgerIcon,ExternalLinkIcon,RepeatIcon,EditIcon} from "@chakra-ui/icons";
import '../styles/cart.css';
import { BiShoppingBag} from 'react-icons/bi';
import { Link, renderMatches } from "react-router-dom";
import { getSneakers } from "../services/fakeSneakersService";
import { x } from "joi";
import { signInWithGoogle, signOut } from "../firebase-config";


const Navigation = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const [loggedin ,setIsLoggedIn] = useState(0);
    const [sneakers,setSneakers] = useState(getSneakers);
    const [filteredData,setFilteredData] = useState([]);

    const username = localStorage.getItem('username');
    const photoURL = localStorage.getItem('photoURL');

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

    function logout (){
        localStorage.removeItem('username');
        localStorage.removeItem('photoURL')
        setIsLoggedIn(0);
        navigate('/');
    }


    function handleFilter(e){

        if(e.target.value.length !== 0){
            const key = e.target.value;
            const newFilter = sneakers.filter((value) => {
                return value.name.toLowerCase().includes(key.toLowerCase());
            })

            setFilteredData(newFilter);

        }else{
            setFilteredData([]);
        }
    }

    function handleBlur(e){
        setTimeout(() => {
            setFilteredData([]);
            e.target.value = '';
        }, 250);
    }


    //function to handle history

    const navigate = useNavigate();


    function checkLogin (){

        if(!username) return <Box display="flex" mt="3">
                                    <Link to="/Login"><Button size="sm"mr="25px" colorScheme='black' variant='outline'>Login</Button></Link>
                                    </Box>

         return <Box display="flex" mt="3">
                 <Avatar mr = "3" size="sm" name='Renova mbonimpa' src={photoURL} />
                    <Box ml={4}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            colorScheme='blackAlpha'
                        />
                        <MenuList>
                            <Link to="/Collection"><MenuItem icon={<AddIcon />} command='⌘T'>
                                My Collection
                            </MenuItem></Link>
                            <Link to="/Cart"><MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                            Shopping Cart
                            </MenuItem></Link>
                            <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                            Notifications
                            </MenuItem>
                            <MenuItem onClick={logout} icon={<EditIcon />} command='⌘O'>
                            Logout
                            </MenuItem>
                        </MenuList>
                        </Menu>
                        </Box>
                </Box>  
                

    }
    return ( 
        <React.Fragment>
             <Alert status='warning'>
                <AlertIcon />
                Site under construction
            </Alert>
            <Container paddingBottom="10px" bg="gray.100" maxW="xxl">
                <Container maxW="container.xl">
                    <Box display="flex" justifyContent="space-between">
                    <Link to="/"><Box mt="3" fontWeight="900">ShoeBox.</Box></Link>
                    <Box mt ="2" w="50%" maxW="50%" display="flex" justifyContent="space-between">
                        <Box w="100%" display="block">
                            <Box w="100%">
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                            />
                            <Input w="100%" onBlur={handleBlur} onChange={handleFilter} backgroundColor="gray.200" focusBorderColor="gray.400"  type='search'variant="filled" placeholder='search here' />
                        </InputGroup>
                    </Box>
                    <Box position="relative" w="100%">
                    <Box borderRadius="7px" position="absolute" w="100%" zIndex="2" backgroundColor="gray.100" mt="4">
                            {filteredData.map(sneaker => <SearchResult key={sneaker._id}
                                                                        sneaker ={sneaker}
                                                                        name={sneaker.name.toLowerCase()}
                                                                        description={sneaker.description} 
                                                                        price={sneaker.price}
                                                                        image={sneaker.imageURL}
                                                                        numberInStock={sneaker.numberInStock}
                                                                        /> 
                                                         )} 
                    </Box>
                    </Box>
                    </Box>
                    </Box>
                    {checkLogin()}
                    </Box>
                </Container>
             </Container>
        </React.Fragment>
     );
}
 
export default Navigation;