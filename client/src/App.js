import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './scenes/home/Home.jsx'
import ItemDetails from "./scenes/itemDetails/ItemDetails.jsx";
import Checkout from "./scenes/checkout/Checkout.jsx";
import Conformation from "./scenes/checkout/Conformation.jsx";
import NavBar from "./scenes/global/NavBar.jsx";
import CartMenu from "./scenes/global/CartMenu.jsx";
import Footer from "./scenes/global/Footer.jsx";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="chekout/success" element={<Conformation/>} />
      </Routes>
      <CartMenu/>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
