import { Container } from "@chakra-ui/react";
import "../styles/shopnow.css";
import Product from "./Product";
import { getSneakers } from "../services/fakeSneakersService";

const ShopNow = () => {
    const sneakers = getSneakers();
    return ( 
        <>
        <Container height="100%" mb="3" mt="3" maxW="container.lg">
            <div className="row">
                    {sneakers.map(sneaker => <Product name={sneaker.name}
                                                        description={sneaker.description} 
                                                        price={sneaker.price}
                                                        image={sneaker.imageURL}
                                                        numberInStock={sneaker.numberInStock}/>)} 
            </div>       
        </Container>
        </>
     );
}
 
export default ShopNow;