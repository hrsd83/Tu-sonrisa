const Hero = () => {
  return (
    <section className="  w-full h-screen flex flex-col text-white items-center">
      <div className="h-[50px] w-[350px]  sm:h-[50px]  lg:w-[500px]  lg:h-[60px] text-2xl flex   bg-primary text-center items-center justify-center lg:text-4xl mt-20 rounded-md ">
        <h1>NUESTRAS ESPECIALIDADES</h1>
      </div>

      <div className=" container mx-auto px-5 md:p-0  mt-20   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
        {/* Card 1 */}
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col  items-center justify-center  rounded-t-3xl bg-primary md:px-4 shadow-md lg:col-start-1   ">
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
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md lg:col-start-2   ">
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
        <div className="w-full   md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md lg:col-start-3 ">
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
        <div className="w-full   md:w-[250px] md:h-[220px] flex flex-col items-center justify-center  rounded-t-3xl bg-primary md:px-4  shadow-md lg:col-start-4  ">
          <img
            src="/src/assets/img/especialidades/implantes.png"
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

        {/* CARD 5 GRILLA 2 */}
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-2  ">
          <img
            src="/src/assets/img/especialidades/endodoncia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px]  font-bold mt-2">ENDODONCIA</h2>
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
        {/* CARD 6 GRILLA 2 */}
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-3  ">
          <img
            src="/src/assets/img/especialidades/diseñoSonrisa.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px]  font-bold mt-2">DISEÑO DE SONRISA</h2>
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
        {/* CARD 8 GRILLA 3 */}
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-4  ">
          <img
            src="/src/assets/img/especialidades/maxilofacial.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px] text-center   font-bold ">
            CIRUGÍA FACIAL Y MAXILOFACIAL
          </h2>
          <div className=" flex w-[250px]   text-center justify-around mt-0 p-1 mb-2  ">
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
        {/* CARD 9 GRILLA 3 */}
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-2  ">
          <img
            src="/src/assets/img/especialidades/protesis.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px]  font-bold mt-2">PROTESIS DENTALES</h2>
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
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-3  ">
          <img
            src="/src/assets/img/especialidades/periodoncia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px]  font-bold mt-2">PERIODONCIA</h2>
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
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-4  ">
          <img
            src="/src/assets/img/especialidades/articulacion.png"
            alt="Imagen 1"
            className="w-[120px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px]  font-bold mt-2">
            ATM-ARTICULACIÓN TÉMPORO MANDIBULAR
          </h2>
          <div className=" flex w-[250px]   text-center justify-around mt-2 p-1 mb-2  ">
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
        <div className="w-full md:w-[250px] md:h-[220px] flex flex-col items-center justify-center   rounded-t-3xl bg-primary md:px-4  shadow-md  lg:col-start-5  ">
          <img
            src="/src/assets/img/especialidades/fonoaudiologia.png"
            alt="Imagen 1"
            className="w-[140px] h-[80px] mt-12 "
          />
          <h2 className="text-[15px]  font-bold mt-2">FONOAUDIOLOGÍA</h2>
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
      {/* IMAGEN 1 */}
      <div className="w-full md:w-[250px]  md:h-[220px] flex flex-col items-center justify-center md:px-4 relative   ">
        <img
          src="/src/assets/img/diente4.png"
          alt="Imagen 1"
          className=" xl:w-[250px] xl:h-[200px] translate-x-[570px] -translate-y-[700px]  opacity-60 hidden sm:hidden xl:block  top-[10%] right-[10%] absolute object-cover rotate-12 "
        />
      </div>
      {/* IMAGEN 2 */}
      <div className="w-full md:w-[250px]  md:h-[220px] flex flex-col items-center justify-center md:px-4 relative   ">
        <img
          src="/src/assets/img/diente4.png"
          alt="Imagen 1"
          className=" xl:w-[250px] xl:h-[200px] -translate-x-[400px] -translate-y-[460px]  opacity-60 hidden sm:hidden xl:block  top-[0%] right-[100%] absolute object-cover rotate-12 "
        />
      </div>
    </section>
  );
};

export default Hero;
