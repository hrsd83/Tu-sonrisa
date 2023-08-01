import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import { useRef } from "react";
import { useEffect } from "react";
const images = [
  {
    id: 1,
    src: "",
    name: "",
    position: "Cargo 1",
  },
  {
    id: 2,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 3,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 4,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 5,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 6,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 7,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 8,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 9,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },
  {
    id: 10,
    src: "/especialistas/billgates.jpg",
    name: "Nombre 2",
    position: "Cargo 2",
  },

  // Agrega más imágenes y detalles aquí
];
const Carousel = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Cambia el valor para ajustar la velocidad del desplazamiento automático
    return () => clearInterval(interval);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col p-5 ">
        <p className="flex font-semibold text-xl">NUESTRO EQUIPO</p>
        <p className="flex text-primary text-4xl">Contamos con </p>
        <div className="w-[350px]   md:w-[560px] bg-primary text-center p-2  mt-1">
          <p className="text-white text-xl  md:text-4xl">EXPERIMENTADOS ESPECIALISTAS</p>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-1 mt-16 ">
            <img
              src={image.src}
              alt={image.name}
              className="rounded-full bg-primary w-40 h-40 mx-auto "
            />
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{image.name}</h3>
              <p className="text-gray-500">{image.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "tailwindcss/tailwind.css";

// const images = [
//   {
//     id: 1,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 1",
//     position: "Cargo 1",
//   },
//   {
//     id: 2,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 3,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 4,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 5,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 6,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 7,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 8,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },
//   {
//     id: 9,
//     src: "/especialistas/billgates.jpg",
//     name: "Nombre 2",
//     position: "Cargo 2",
//   },

//   // Agrega más imágenes y detalles aquí
// ];

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // Mostrar 3 imágenes a la vez
//     slidesToScroll:5,
//     responsive: [
//       {
//         breakpoint: 640, // Dispositivos pequeños
//         settings: {
//           slidesToShow: 30,
//           slidesToScroll: 30,
//         },
//       },
//       {
//         breakpoint: 768, // Dispositivos medianos
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 1024, // Dispositivos grandes
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image) => (
//         <div key={image.id} className="px-4 mt-10">
//           <img
//             src={image.src}
//             alt={image.name}
//             className="rounded-full w-15 h-15 mx-auto"
//           />
//           <div className="text-center mt-4">
//             <h3 className="text-lg font-semibold">{image.name}</h3>
//             <p className="text-gray-500">{image.position}</p>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default Carousel;
