import { useEffect, useState } from "react";
const BannerEquipo = () => {
     const [text, setText] = useState("");
     const frase = ["nuestro equipo"];

     useEffect(() => {
       let currentFraseIndex = 0;
       let currentText = '';
       let isDeleting = false;
       let typingSpeed = 100;

       const type = () => {
        // ANIMACION CON USESTATE Y USEEFFECT EN EL PARRAFO DE TRABAJA EN NUESTRO EQUIPO
         const currentFrase = frase[currentFraseIndex];

         if (isDeleting) {
           currentText = currentFrase.substring(0, currentText.length - 1);
         } else {
           currentText = currentFrase.substring(0, currentText.length + 1);
         }

         setText(currentText);

         if (!isDeleting && currentText === currentFrase) {
           isDeleting = true;
           typingSpeed = 100;
         } else if (isDeleting && currentText === "") {
           isDeleting = false;
           currentFraseIndex = (currentFraseIndex + 1) % frase.length;
           typingSpeed = 250;
         }
         setTimeout(type, typingSpeed);
       };
       type();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
  
  return (
    <section className="bg-white py-8 mt-10 opacity-95">
      <div className="container mx-auto ">
        {/* <h2 className="text-5xl font-bold  mb-4">Trabaja en nuestro equipo</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className=" p-4 ">
            <h2 className="text-5xl text-left font-bold  mb-4 animate-blink">
              Trabaja en {text}
            </h2>

            <div className="flex mb-4 bg mt-20 items-center justify-center 
             ">
              <a
                href="enlace-1"
                className="bg-primary hover:bg-violet-600 rounded-md text-white text-center text-xl px-12 py-3 mr-2  md:px-10 md:py-0 lg:px-10 lg:py-3 "
              >
                Enviar CV
              </a>
              <a
                href="enlace-2"
                className="hover:bg-primary hover:text-white rounded-md text-primary border-2 border-primary text-center text-xl px-6 py-3  md:px-10 md:py-0 lg:px-10 lg:py-3 mr-2"
              >
                Conocer el equipo
              </a>
            </div>
          </div>
          <div className="w-full  bg-primary rounded-xl opacity-95   ">
            <img
              src="/banner/imgBanner.webp"
              alt="Imagen"
              className="w-[500px]   float-right    "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerEquipo;

