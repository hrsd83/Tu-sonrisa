const Hero = () => {
  const phoneNumber = "+541143998712";

  const renderCard = (imageSrc, title) => {
    return (
      <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[225px] md:h-[230px] lg:w-full lg:h-[200px] flex flex-col items-center justify-center rounded-t-3xl bg-primary md:px-4 shadow-lg shadow-primary">
        <img
          src={imageSrc}
          alt={title}
          className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px] xl:w-[130px] xl:h-[70px] mt-4"
        />
        <h2 className="text-[16px] lg:text-[13px] xl:text-[14px] font-bold text-center mt-2">
          {title}
        </h2>
        <div className="flex min-w-max h-12 justify-around items-center w-full mt-4">
          <a
            href="#"
            className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-1 md:py-2 lg:px-2"
          >
            Más info
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
          >
            Reserva turno
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      name="Especialidades"
      className="w-full flex flex-col bg-violet-100 text-white items-center mt-40"
    >
      <div className="h-12 w-full sm:h-[50px] lg:w-[500px] lg:h-[60px] text-2xl flex bg-primary text-center items-center justify-center lg:text-4xl mt-32 rounded-md">
        <h1 className="">NUESTRAS ESPECIALIDADES</h1>
      </div>
      <div className="w-full h-full container mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 px-5 lg:px-0">
        {/* Card 1 */}

        {renderCard(
          "especialidades/odontologiaGeneral.png",
          "ODONTOLOGÍA GENERAL"
        )}
        {/* Card 2 */}
        {renderCard("especialidades/ortodoncia.png", "ORTODONCIA")}
        {/* Card 3 */}
        {renderCard("especialidades/odontopediatria.png", "ODONTOPEDIATRÍA")}
        {/* Card 4 */}
        {renderCard("especialidades/implantes.png", "IMPLANTES DENTALES")}
        {/* Card 5 */}
        {renderCard("especialidades/endodoncia.png", "ENDODONCIA")}
        {/* Card 6 */}
        {renderCard("especialidades/diseñoSonrisa.png", "DISEÑO DE SONRISA")}
        {/* Card 7 */}
        {renderCard(
          "especialidades/maxilofacial.png",
          "CIRUGÍA BUCAL Y MAXILOFACIAL"
        )}
        {/* Card 8 */}
        {renderCard("especialidades/protesis.png", "PROTESIS DENTALES")}
        {/* Card 9 */}
        {renderCard("especialidades/periodoncia.png", "PERIODONCIA")}
        {/* Card 10 */}
        {renderCard(
          "especialidades/articulacion.png",
          "ATM-ARTICULACIÓN TÉMPORO MANDIBULAR"
        )}
        {/* Card 11 */}
        {renderCard("especialidades/fonoaudiologia.png", "FONOAUDIOLOGÍA")}
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {

//   const phoneNumber = "https://wa.me/+541143998712";
//   return (
//     <section
//       name="Especialidades"
//       className="w-full  flex flex-col bg-violet-100 text-white items-center mt-52 -z-50"
//     >
//       <div className="h-[50px] w-[350px]  sm:h-[50px]  lg:w-[500px]  lg:h-[60px] text-2xl flex   bg-primary text-center items-center justify-center lg:text-4xl mt-20 rounded-md   ">
//         <h1 className="">NUESTRAS ESPECIALIDADES</h1>
//       </div>
//       <div className="w-full  h-full container   mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8 sm:gap-8 md:gap-2 lg:gap-3 xl:gap-10 px-5 lg:px-0">
//         {/* Card 1 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-1  shadow-lg shadow-primary   ">
//           <img
//             src="especialidades/odontologiaGeneral.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4   "
//           />
//           <h2 className="text-[16px] text-center lg:text-[13px] xl:text-[16px] font-bold mt-2 ">
//             ODONTOLOGÍA GENERAL
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6 ">
//             <a
//               href="/OdontologiaGeneral"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2   "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white  border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-2 shadow-lg shadow-primary  ">
//           <img
//             src="especialidades/ortodoncia.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             ORTODONCIA
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-3 shadow-lg shadow-primary  ">
//           <img
//             src="especialidades/odontopediatria.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             ODONTOPEDIATRÍA
//           </h2>
//           <div className="  flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* Card 4 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-4 shadow-lg shadow-primary  ">
//           <img
//             src="/especialidades/implantes.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             IMPLANTES DENTALES
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>

//         {/* CARD 5 GRILLA 2 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-2 shadow-lg shadow-primary ">
//           <img
//             src="/especialidades/endodoncia.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             ENDODONCIA
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* CARD 6 GRILLA 2 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-3 shadow-lg shadow-primary  ">
//           <img
//             src="/especialidades/diseñoSonrisa.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             DISEÑO DE SONRISA
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* CARD 7 GRILLA 3 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-4  shadow-lg shadow-primary ">
//           <img
//             src="/especialidades/maxilofacial.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className=" text-center text-[16px] lg:text-[13px] xl:text-[13px] font-bold mt-0">
//             CIRUGÍA BUCAL Y MAXILOFACIAL
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* CARD 8 GRILLA 3 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-2 shadow-lg shadow-primary  ">
//           <img
//             src="/especialidades/protesis.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             PROTESIS DENTALES
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* CARD 9  */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-3 shadow-lg shadow-primary ">
//           <img
//             src="/especialidades/periodoncia.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             PERIODONCIA
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* CARD 10 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-4 shadow-lg shadow-primary  ">
//           <img
//             src="/especialidades/articulacion.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-2  "
//           />
//           <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold text-center ">
//             ATM-ARTICULACIÓN TÉMPORO MANDIBULAR
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-4    ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//         {/* CARD 11 */}
//         <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4  lg:col-start-5 shadow-lg   shadow-primary  ">
//           <img
//             src="/especialidades/fonoaudiologia.png"
//             alt="Imagen 1"
//             className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
//           />
//           <h2 className="text-[16px] text-center lg:text-[13px] xl:text-[16px] font-bold mt-2">
//             FONOAUDIOLOGÍA
//           </h2>
//           <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
//             <a
//               href="#"
//               className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
//             >
//               Más info
//             </a>
//             <a
//               href={phoneNumber}
//               className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
//             >
//               Reserva turno
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
