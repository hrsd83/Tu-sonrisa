import { motion } from "framer-motion";

import { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

export const OdontologiaGeneral = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col min-h-screen">
        <NavBar  />

        <div className="flex-grow flex items-center justify-center">
          <div className="flex items-center mt-56 flex-col md:flex-row px-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src="/especialidades/especialidadDescripcion/odontologia-general.webp"
                alt="Imagen"
                className="w-full md:w-[350px]"
              />
            </motion.div>
            <div className="ml-0 md:ml-8 mt-4 md:mt-0">
              <h1 className="text-4xl font-semibold mb-4 ">
                ODONTOLOGÍA <span className="text-primary">GENERAL</span>{" "}
              </h1>
              <div className="grid grid-cols-1 gap-4">
                <ul className="list-disc pl-10">
                  <li>
                    Evaluamos clínicamente toda la cavidad bucal. Diagnóstico de
                    patologías bucales en labio,<br></br> lengua, paladar,
                    carrillos, dientes y estructuras óseas de soporte dental.
                  </li>
                  <li>Tratamientos de limpiezas y profilaxis dentales.</li>
                  <li>
                    Eliminación de caries con aislamiento absoluto y relativo.
                  </li>
                  <li>
                    Rehabilitación de cuellos dentales para eliminar la
                    sensibilidad.
                  </li>
                  <li>Restauraciones post endodónticas.</li>
                  <li>Blanqueamientos dentales clínicos, ambulatorios.</li>
                  <li>Atención de emergencias.</li>
                  <p className="mt-10 font-semibold">
                    En Tu Sonrisa te recomendamos cuidar la higiene bucal,
                    mantener una adecuada <br></br> alimentación y visitar al
                    odontólogo cada 6 meses para prevenir patologías bucales.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer className="bg-white" />
      </div>
    </motion.div>
  );
};

export default OdontologiaGeneral;
