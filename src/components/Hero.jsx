const Hero = () => {

 return (
   <section className="  w-full h-[450px]   flex flex-col text-white items-center">
     <div className="h-[50px] w-[350px]  sm:h-[50px]  lg:w-[500px]  lg:h-[60px] text-2xl flex   bg-primary text-center items-center justify-center lg:text-4xl mt-20 rounded-md ">
       <h1>NUESTRAS ESPECIALIDADES</h1>
     </div>

     <div className="container px-5 md:p-0 mt-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
       {/* Card 1 */}
       <div className="w-full   md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/odontologiaGeneral.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">ODONTOLOGÍA GENERAL</h2>
         <div className=" flex w-[250px]   text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>

       {/* Card 2 */}
       <div className="w-full   md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/ortodoncia.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">ORTODONCIA</h2>
         <div className=" flex w-[250px]  text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>

       {/* Card 3 */}
       <div className="w-full   md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/odontopediatria.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">ODONTOPEDIATRÍA</h2>
         <div className=" flex w-[250px]   text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>

       {/* Card 4 */}
       <div className="w-full   md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/IMPLANTES.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">IMPLANTES DENTALES</h2>
         <div className=" flex w-[250px]   text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>
       {/* Card 5 */}
       {/* <div className="w-full  md:w-[400px] md:h-[600px] flex flex-col items-center justify-center md:px-4    ">
         <img
           src="/src/assets/img/diente4.png"
           alt="Imagen 1"
           className="  xl:w-[400px] xl:h-[400px] -translate-x-24 -translate-y-24 rotate-12 opacity-60 hidden sm:hidden xl:block "
         />
       </div> */}
     </div>

     <div className="container px-5 md:p-0   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-12">
       {/* grilla 2 Card 1 */}
       <div className="w-full mt-10 md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/odontologiaGeneral.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">ODONTOLOGÍA GENERAL</h2>
         <div className=" flex w-[250px]   text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>
       {/* grilla 2 Card 2 */}
       <div className="w-full mt-10 md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/odontologiaGeneral.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">ODONTOLOGÍA GENERAL</h2>
         <div className=" flex w-[250px]   text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>
       {/* grilla 2 Card 3 */}
       <div className="w-full mt-10 md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md">
         <img
           src="/src/assets/img/especialidades/odontologiaGeneral.png"
           alt="Imagen 1"
           className="w-[140px] h-[80px] mt-12 "
         />
         <h2 className="text-[15px]  font-bold mt-2">ODONTOLOGÍA GENERAL</h2>
         <div className=" flex w-[250px]   text-center justify-around mt-5 p-1 mb-2  ">
           <a
             href="#"
             className=" text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 mr-2 rounded  "
           >
             Más info
           </a>
           <a
             href="#"
             className="text-primary bg-white hover:bg-primary hover:text-white border-2 px-4 py-2 rounded"
           >
             Reserva turno
           </a>
         </div>
       </div>
     </div>
   </section>
 );
}


export default Hero;
