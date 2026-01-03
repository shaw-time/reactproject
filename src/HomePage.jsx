import React from "react";
import Slider from "react-slick";
import "./HomePage.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const productImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://plus.unsplash.com/premium_photo-1661558951515-47f7706fd9c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="homepage">
      <Slider {...settings}>
        {productImages.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`product-${index}`} />
            <div className="overlay">
              <h1>Welcome to ShoperrStop</h1>
              <p>Find the best deals on your favorite products</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;