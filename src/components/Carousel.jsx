
import { useState, useEffect } from "react";
const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/src/assets/img/img1.jpg"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="w-full h-[250px] lg:h-[450px]  md:block relative  -z-50  ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </section>
  );
};
export default Carousel;
