import { Container } from "@chakra-ui/react";
import "../styles/shopnow.css";
import CollectionProduct from "./CollectionProduct";
import { getSneakers } from "../services/fakeSneakersService";

const MyCollection = () => {
    const sneakers = getSneakers();
    return ( 
        <>
        <Container height="100%" mb="3" mt="3" maxW="container.lg">
            <div className="row">
                    {sneakers.map(sneaker => <CollectionProduct name={sneaker.name}
                                                        description={sneaker.description} 
                                                        price={sneaker.price}
                                                        image={sneaker.imageURL}
                                                        numberInStock={sneaker.numberInStock}/>)} 
            </div>       
        </Container>
        </>
     );
}
 
export default MyCollection;