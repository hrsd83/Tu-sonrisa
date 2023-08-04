import { FaFacebook, FaInstagram } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";
const Footer = () => {
  return (
    <footer className="w-full h-full  md:h-[300px] bg-primary py-4 mt-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-10 ">
        <div className="order-2 md:order-1">
          <a href="#">
            <img
              src="/carousel/logo_sonrisa.png"
              alt="Imagen"
              className="w-48 md:w-64 rounded-full"
            />
          </a>
        </div>
        <div className="order-1 md:order-2 flex flex-col items-center px-10 md:items-start mb-4 md:mb-0">
          <p className="mb-2 text-white text-xl text-center">Horario :</p>
          <p className="mb-2 text-white text-xl text-center">
            Lunes a sábados de 8:00 A 19:30 horas
          </p>
          <p className="mb-2 text-white text-xl text-center">
            Domingos y feriados de 9:00 A 15:00 horas
          </p>
          <p className="mb-2 text-white text-xl text-center">
            Emergencias Odontológicas
          </p>
          <p className="mb-2 text-white text-xl text-center">
            +54 9 1139867665
          </p>
          <p className="mb-2 text-white text-xl text-center">
            Av. Santa Fe 2755 piso 8 Recoleta / CABA
          </p>
        </div>
        <div className="order-3 md:order-3 flex flex-col items-center md:items-end">
          <h2 className="mb-2 text-white text-xl">Siguenos en:</h2>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaFacebook className="text-5xl text-white hover:text-blue-800 transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-5xl text-white hover:text-orange-500 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      <WhatsAppButton/>
    </footer>
  );
};
export default Footer;
