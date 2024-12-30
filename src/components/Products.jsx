import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/products.css";
 // Include styles for this component

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productSection = document.querySelector(".product-section");
      if (productSection) {
        const rect = productSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Luxury Yacht A",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$5000",
      feet: "85 ft",
      capacity: "20 People",
    },
    {
      id: 1,
      name: "Luxury Yacht A",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$5000",
      feet: "85 ft",
      capacity: "20 People",
    },
    {
      name: "Product 2",
      image: "path/to/image2.jpg",
      price: "$120",
      feet: "35ft",
      capacity: "12 people",
      whatsappNumber: "1234567891",
      email: "email2@example.com",
    },
    {
      name: "Product 3",
      image: "path/to/image3.jpg",
      price: "$150",
      feet: "40ft",
      capacity: "15 people",
      whatsappNumber: "1234567892",
      email: "email3@example.com",
    },
  ];

  return (
    <section className="product-section">
      <h2 className="section-title">Our Yachts</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Slider {...sliderSettings} className="product-slider">
              {product.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={product.name} className="product-image" />
                </div>
              ))}
            </Slider>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-detail">Price: {product.price}</p>
              <p className="product-detail">Size: {product.feet}</p>
              <p className="product-detail">Capacity: {product.capacity}</p>
            </div>
            <div className="product-actions">
              <button className="btn btn-primary">Book Now</button>
              <button className="btn btn-secondary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

