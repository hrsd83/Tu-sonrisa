const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col text-white items-center mt-52 -z-50">
      <div className="h-[50px] w-[350px]  sm:h-[50px]  lg:w-[500px]  lg:h-[60px] text-2xl flex   bg-primary text-center items-center justify-center lg:text-4xl mt-20 rounded-md -z-50  ">
        <h1>NUESTRAS ESPECIALIDADES</h1>
      </div>
      <div className="w-full  h-full container   mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-8 md:gap-2 lg:gap-3 xl:gap-10 px-5 lg:px-0 -z-50  ">
        {/* Card 1 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-1   ">
          <img
            src="especialidades/odontologiaGeneral.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4   "
          />
          <h2 className="text-[16px] text-center lg:text-[13px] xl:text-[16px] font-bold mt-2 ">
            ODONTOLOGÍA GENERAL
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6 ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2   "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white  border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-2  ">
          <img
            src="especialidades/ortodoncia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            ORTODONCIA
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-3  ">
          <img
            src="especialidades/odontopediatria.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            ODONTOPEDIATRÍA
          </h2>
          <div className="  flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-4  ">
          <img
            src="/especialidades/implantes.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            IMPLANTES DENTALES
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>

        {/* CARD 5 GRILLA 2 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-2 ">
          <img
            src="/especialidades/endodoncia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            ENDODONCIA
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* CARD 6 GRILLA 2 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-3  ">
          <img
            src="/especialidades/diseñoSonrisa.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            DISEÑO DE SONRISA
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* CARD 7 GRILLA 3 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-4  ">
          <img
            src="/especialidades/maxilofacial.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className=" text-center text-[16px] lg:text-[13px] xl:text-[13px] font-bold mt-0">
            CIRUGÍA BUCAL Y MAXILOFACIAL
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* CARD 8 GRILLA 3 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-2  ">
          <img
            src="/especialidades/protesis.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            PROTESIS DENTALES
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* CARD 9  */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-3 ">
          <img
            src="/especialidades/periodoncia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold mt-2">
            PERIODONCIA
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* CARD 10 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-4  ">
          <img
            src="/especialidades/articulacion.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-2  "
          />
          <h2 className="text-[16px] lg:text-[13px] xl:text-[16px] font-bold text-center ">
            ATM – ARTICULACIÓN TÉMPORO MANDIBULAR
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-4    ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* CARD 11 */}
        <div className="max-w-full sm:w-[300px] sm:h-[230px] md:w-[245px] md:h-[230px]  lg:w-[100%] lg:h-[200px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-5  ">
          <img
            src="/especialidades/fonoaudiologia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] lg:w-[120px] lg:h-[70px]  xl:w-[140px] xl:h-[80px] mt-4  "
          />
          <h2 className="text-[16px] text-center lg:text-[13px] xl:text-[16px] font-bold mt-2">
            FONOAUDIOLOGÍA
          </h2>
          <div className=" flex min-w-max h-12 justify-around   items-center sm:w-full lg:w-full lg:mt-6     ">
            <a
              href="#"
              className="   text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-3 md:py-2 lg:px-2  "
            >
              Más info
            </a>
            <a
              href="#"
              className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 rounded lg:px-1"
            >
              Reserva turno
            </a>
          </div>
        </div>
        {/* IMAGEN 1 */}
        {/* <div className="w-full  lg:w-[400px]  md:h-[220px] flex flex-col items-center justify-center md:px-4 relative   ">
          <img
            src="/src/assets/img/diente4.png"
            alt="Imagen 1"
            className=" lg:w-[400px] lg:h-[400px] translate-x-[1150px] -translate-y-[650px]  opacity-60 hidden sm:hidden xl:block  absolute object-cover rotate-12 "
          />
        </div> */}
        {/* IMAGEN 2 */}
        {/* <div className="w-full lg:w-[400px]  md:h-[220px] flex flex-col items-center justify-center md:px-4 relative   ">
          <img
            src="/src/assets/img/herramientas.avif"
            alt="Imagen 1"
            className=" lg:w-[350px] lg:h-[350px] -translate-x-[450px] -translate-y-[350px]  opacity-60 hidden sm:hidden xl:block  top-[10%] right-[60%] absolute object-cover  "
          />
        </div> */}
      </div>
      
    </section>
  );
};

export default Hero;
