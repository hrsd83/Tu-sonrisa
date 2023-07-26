import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const linksToggle = [
    {
      id: 1,
      link: "Especialidades",
    },
    {
      id: 2,
      link: "Nuestro Equipo",
    },
    {
      id: 3,
      link: "RESERVA TURNO",
    },
  ];

  const links = [
    {
      id: 1,
      link: "Especialidades",
    },
    {
      id: 2,
      link: "Nuestro Equipo",
    },
  ];

  return (
    <nav className=" bg-primary py-6 relative">
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
          <img src="public/logo_sonrisa.png"></img>
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

        <div className="lg:flex hidden  flex-grow text-2xl  justify-evenly mt-5">
          {links.map(({ id, link }) => (
            <a key={id} href="" className=" text-white text-center rounded-md mr-8 w-44 h-10 hover:bg-white hover:text-primary transition duration-300  cursor-pointer">
              {link}
            </a>
          ))}
        </div>

        <div className="lg:flex hidden btn-reserva mt-5 animate-bounce  ">
          <a
            href=""
            className=" text-white text-center flex m-1 justify-center mt-2 "
          >
            RESERVAR TURNO
          </a>
        </div>
        {/* Menu Toggle */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary text-white opacity-95">
            {linksToggle.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-2xl "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  offset={-80}
                  smooth
                  duration={400}
                >
                  {link}
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
