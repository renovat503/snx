import Landing from "./components/landing";
import Login from "./components/Login";
import Navigation from "./components/navigation";
import Register from "./components/Register";
import Footer from "./components/footer";
import Cart from "./components/Cart";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import ShopNow from './components/ShopNow';
import MyCollection from './components/MyCollection';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="contentArea">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ShopNow />} />
          <Route path="/collection" element={<MyCollection />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
