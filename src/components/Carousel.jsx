import { useState, useEffect } from "react";
const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/carousel/img2.jpg",
    "/carousel/img3.jpg",
    "/carousel/img4.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="w-full  mx-auto h-[350px] lg:h-[500px]  md:block relative -z-50  ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className={`absolute top-[150px] left-0 w-full h-full  transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </section>
  );
};
export default Carousel;
