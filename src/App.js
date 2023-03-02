import Landing from "./components/landing";
import Login from "./components/Login";
import Navigation from "./components/navigation";
import Register from "./components/Register";
import Footer from "./components/footer";
import Cart from "./components/Cart";
import { Route, Routes,Navigate} from 'react-router-dom';
import "./App.css";
import ShopNow from './components/ShopNow';
import MyCollection from './components/MyCollection';
import SneakerDetails from './components/SneakerDetails';

function App() {

  const username = localStorage.getItem('username');
  return (
    <div className="App">
      <Navigation/>
      <div className="contentArea">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={username ?<Cart /> : <Navigate to ="/Login" Replace />}  />
          <Route path="/shop" element={<ShopNow />} />
          <Route path="/collection" element={username ?<MyCollection /> : <Navigate to ="/Login" replace />} />
          <Route path="sneaker/:id" element={<SneakerDetails/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
