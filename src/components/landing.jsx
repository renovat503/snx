import { Button ,Container,Box,Image} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Offwhite from "../assets/offwhiteblue.png";
import '../styles/landing.css';
const Landing = () => {
    return ( 
        <>
        <Container maxW="container.lg">
            <div className="container cont">
                <div className="row">
                    <div className="col">
                        <Box mt="20">
                            <Box fontSize="100" lineHeight="1" fontWeight="600">Classic Sneakers</Box>
                            <Box mt="5" fontSize="14" w="400px">Things are better as a Shoebox Member.
                                Get first and exclusive access to the 
                                newest styles & innovation, free shipping, 
                                birthday rewards and more.</Box>
                            <Box mt="10">
                              <Link to="/shop"><Button color="white" rightIcon={<IoIosArrowForward />}  bg="black">
                                    Shop Now
                                </Button></Link>
                            </Box>
                        </Box>
                    </div>
                    <div className="col">
                        <Box mt="20" minW="300px" w="100%">
                            <Image src={Offwhite}/>
                        </Box>
                    </div>
                </div>
            </div>
    </Container>
        </>
     );
}
 
export default Landing;