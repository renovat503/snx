import { Component } from "react";
import { Link } from "react-router-dom";
import {Container,Box,Heading,Divider,Button,Text,Switch ,Alert,AlertIcon,AlertTitle,AlertDescription} from "@chakra-ui/react";
import ProductInCart from "./ProductInCart";
import { getShoppingCart } from "../services/fakeSneakersService";
import { BiShoppingBag } from 'react-icons/bi';


class Cart extends Component {

    state = {
        shoppingCart : getShoppingCart(),
    }

    calculateTotal = () => { // Function to calculate the total amount in the shopping cart
        const getProductsInState = this.state.shoppingCart;
        let total = 0 ;
        let totalAfterTax = 0;
        let taxes = 0;
        let info = {};

        for (let product of getProductsInState){
            total += product.price;
        }

        taxes = (total * 4.65) / 100;
        totalAfterTax = total + taxes;
        return  info = {taxes : taxes , total : total,totalAfterTax :totalAfterTax}; // returning the calculated total
    }

    deleteSneaker = (sneaker) => {
        const shoppingCart = this.state.shoppingCart.filter(p => p._id !== sneaker._id)
        this.setState({shoppingCart})
      }

      showProducts = () => {
          if(this.state.shoppingCart.length === 0) 
          return <Box p="2" minW="350px">
                    <Alert
                        bg="gray.100"
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        borderRadius={7}
                        >
                        <BiShoppingBag size='30px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Shopping Cart is Empty
                        </AlertTitle>
                        </Alert>
                 </Box>

          return this.state.shoppingCart.map(sneaker => <ProductInCart name ={sneaker.name}
                description ={sneaker.description}
                price = {sneaker.price}
                numberInStock={sneaker.numberInStock}
                id={sneaker._id}
                onDelete={()=>this.deleteSneaker(sneaker)}
                imageUrl={sneaker.imageURL}/>)
      }

render(){
    
    return ( 
        <>
        <Container height="100%" mb="3" maxW="container.xl">
            <div className="row">
                <div className="col">
            <Box bg="white" padding="3" mt="2" borderRadius="8">
            <Heading as='h5' size='sm'>
                Cart
            </Heading>
           {this.showProducts()}
            
            </Box>
            </div>
            <div className="col">
                <Box bg="white" mt="2" borderRadius="5" p="5">
                  <Box color="gray.400" fontSize="18">Delivery</Box>
                  <Switch size='md' />
                  <Box mt="2" fontSize="14" color="gray.400">Delivery date : June 24,2022</Box>
                  <Divider mt="2" color="gray.400"/>
                  <Box mt="2" display="flex"justifyContent="space-between"color="gray.600">
                      <Text fontSize="18" fontWeight="600">Subtotal</Text>
                      <Text fontSize="18" fontWeight="600">{this.calculateTotal().total}</Text>
                  </Box>
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text>Delivery</Text>
                      <Text>$0.00</Text>
                  </Box>
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text>Tax</Text>
                      <Text>+ {this.calculateTotal().taxes}</Text>
                  </Box>
                  <Divider mt="2" color="gray.400" />
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text fontSize="18" fontWeight="600">Total</Text>
                      <Text fontSize="18" fontWeight="600">{this.calculateTotal().totalAfterTax}</Text>
                  </Box>
                    <Button mt="2"colorScheme='teal' variant="outline" w="100%">Proceed to checkout</Button>
                    <Link to="/Shop"><Button mt="2"colorScheme='gray' bg="black" w="100%"><Text color="white">Continue shopping</Text></Button></Link>
                </Box>
            </div>
            </div>
        </Container>
        
        </>
     );

}
}
 
export default Cart;