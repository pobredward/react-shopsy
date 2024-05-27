import React from "react";
import Img1 from "../../assets/hero/arginine.png";
import Img2 from "../../assets/hero/arginine.png";
import Img3 from "../../assets/hero/arginine.png";
import Img4 from "../../assets/hero/arginine.png";
import Img5 from "../../assets/hero/arginine.png";
import { FaStar } from "react-icons/fa6";
import AOS from "aos";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Casual",
    rating: 4.2,
    color: "Blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Men Formal",
    rating: 4.8,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Kids Collection",
    rating: 4.7,
    color: "Yellow",
    aosDelay: "800",
  },
];

const Products = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  },[])
  
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-width-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={data.aos}
                key={data.id} className="space-y-1">
                <img
                  src={data.img}
                  alt="Product"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div className="font-semibold">{data.title}</div>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400"></FaStar>
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
