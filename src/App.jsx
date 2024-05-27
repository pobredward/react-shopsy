import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/products/Products";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";

export default function App() {
  // const [orderPopup, setOrderPopup] = React.useState(false);
  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // }

  return (
    <main>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Products></Products>
        <TopProducts></TopProducts>
      </div>
    </main>
  );
}
