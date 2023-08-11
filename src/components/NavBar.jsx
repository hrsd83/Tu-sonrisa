import { AiFillCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link   } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const NavBar = () => {
  // logica para la ruta raiz del proyecto
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  // SCROLL AL HEADER
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollposition = window.pageYOffset;

      if (scrollposition > 0 && isHomePage) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const [nav, setNav] = useState(false);

  const linksToggle = [
    {
      id: 1,
      title: "Especialidades",
    },
    {
      id: 2,
      title: "Nuestro equipo",
    },
    {
      id: 3,
      title: "Trabaja con nosotros",
    },
    {
      id: 4,
      title: "Siguenos",
    },
  ];

  const links = [
    {
      id: 5,
      title: "Especialidades",
    },
    {
      id: 6,
      title: "Nuestro equipo",
    },
  ];

  return (
    <nav
      className={` w-full h-[150px]  bg-primary py-6 fixed z-50 ${
        showHeader ? "opacity-100" : " opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full hidden sm:hidden lg:flex  items-center text-center justify-evenly h-12 bg-black absolute top-0 ">
        <p className="text-xl  text-red-600 animate-bounce">
          EMERGENCIAS ODONTOLÓGICAS
        </p>
        <p className="text-xs  text-white">
          LUNES A SABADOS DE 8:00 A 19:30 HORAS/DOMINGOS Y FERIADOS DE 9:00 a
          15:00 HORAS
        </p>
      </div>

      <div className=" container mx-auto flex px-8 xl:px-0 mt-10 ">
        <div className="flex flex-grow">
          <a href="https://tu-sonrisa.vercel.app/">
            <img src="carousel/logo_sonrisa.png"></img>
          </a>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-2 z-10 text-white  flex lg:hidden"
        >
          {nav ? (
            <AiFillCloseCircle size={30} />
          ) : (
            <RxHamburgerMenu size={30} />
          )}
        </div>

        <div className="lg:flex hidden flex-grow text-2xl justify-evenly mt-5">
          {links.map(({ id, title }) => (
            <Link
              key={id}
              to={title}
              offset={40}
              smooth
              duration={800}
              className="text-white text-center rounded-md mr-8 w-44 h-10 hover:bg-white hover:text-primary transition duration-300 cursor-pointer"
            >
              {title}
            </Link>
          ))}
        </div>

        <div className="lg:flex hidden btn-reserva mt-5 animate-bounce  ">
          <a
            href="https://wa.me/+541143998712"
            className=" text-white text-center flex m-1 justify-center mt-2 "
          >
            RESERVAR TURNO
          </a>
        </div>
        {/* Menu Toggle */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary text-white    opacity-95 ">
            {linksToggle.map(({ id, title }, index) => (
              <li
                key={`toggle-${id}-${index}`}
                className="px-4 cursor-pointer capitalize py-6 text-2xl  "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={title}
                  offset={40}
                  smooth
                  duration={2000}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
