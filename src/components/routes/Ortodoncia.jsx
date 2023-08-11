import { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

export const Ortodoncia = () => {
  useEffect(() => {
    window.scrollTo(0, 30);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow flex items-center justify-center">
        <div className="flex items-center mt-56 flex-col md:flex-row px-10">
          <img
            src="/especialidades/ortodoncia/ortodoncia-1.webp"
            alt="Imagen"
            className="w-full md:w-[350px]"
          />
          <div className="ml-0 md:ml-8 mt-4 md:mt-0 ">
            <h1 className="text-4xl font-bold text-center mb-4">ORTODONCIA </h1>
            <div className="grid grid-cols-1 gap-4">
              <ul className="list-disc pl-10">
                <p className="font-semibold text-xl mb-5">
                  Tratamientos de limpiezas y profilaxis dentales.
                </p>
                <p className="font-semibold">
                  Requisitos para iniciar tu tratamiento:
                </p>
                <li>Radiografía panorámica actualizada</li>
                <li>Telerradiografía lateral</li>
                <li>Cefalometrías</li>
                <li>Fotografías clínicas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img
          src="/especialidades/ortodoncia/Autoligables.png"
          alt="Imagen 1"
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[350px] mx-2"
        />
        <img
          src="/especialidades/ortodoncia/Brackets-Metalicos.png"
          alt="Imagen 2"
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[350px] mx-2"
        />
        <img
          src="/especialidades/ortodoncia/Brackets-Zafiro.png"
          alt="Imagen 3"
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[350px] mx-2"
        />
        <img
          src="/especialidades/ortodoncia/Invisibles.png"
          alt="Imagen 4"
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[350px] mx-2"
        />
      </div>

      <Footer className="bg-white" />
    </div>
  );
};

export default Ortodoncia;
