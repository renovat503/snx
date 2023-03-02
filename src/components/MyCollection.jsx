import { Container,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    CloseButton,
Box} from "@chakra-ui/react";
import "../styles/shopnow.css";
import CollectionProduct from "./CollectionProduct";
import { getSneakers } from "../services/fakeSneakersService";

const MyCollection = () => {
    const sneakers = getSneakers();
    const username = localStorage.getItem('username').split(" ")[0];
    return ( 
        <>
        <Container height="100%" mb="3" mt="3" maxW="container.lg">
        <Alert status='success'>
                                <AlertIcon />
                                <Box>
                                    <AlertTitle>{username} , Welcome to your collection !</AlertTitle>
                                </Box>
                            </Alert>
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