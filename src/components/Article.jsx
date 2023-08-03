const Article = () => {
  return (
    <div className="w-full bg-white mt-20">
      <div className="container w-full bg-white mx-auto px-5 lg:px-0  ">
        <div className="bg-primary w-[330px] mt-5   md:w-[390px]">
          <h1 className="text-3xl  text-white text-center p-2  mb-4">
            ¡VEN CON NOSOTROS!
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
          {/* Columna 1 */}
          <div className="article-grid col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <p className=" text-primary text-6xl m-2">1</p>
            <div className="p-3">
              <p className="text-primary text-xl">
                Te hacemos sentir como en casa
              </p>
              <p>
                Nuestro principal objetivo es tu bienestar. La amabilidad y el
                buen trato nos caracteriza.
              </p>
            </div>
          </div>
          {/* Columna 3 */}

          <div className="article-grid col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <p className=" text-primary text-6xl m-2">2</p>
            <div className="p-3">
              <p className="text-primary text-xl">Somos Especialistas</p>
              <p>
                Contamos con profesionales altamente capacitados en todas las
                áreas de la Odontología.
              </p>
            </div>
          </div>
          {/* Columna 4 */}
          <div className=" article-grid col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <p className=" text-primary text-6xl m-2  ">3</p>
            <div className="p-3">
              <p className="text-primary text-xl">Odontología de Vanguardia</p>
              <p>
                Contamos con equipos de última generación en tecnología, para
                diagnósticos más precisos.
              </p>
            </div>
          </div>
          <div className=" article-grid col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <p className=" text-primary text-6xl m-2">4</p>
            <div className=" p-3">
              <p className="text-primary text-xl ">Continuamos tu Ortodoncia</p>
              <p>
                Continuamos tu tratamiento, previa evaluación con nuestros
                profesionales.
              </p>
            </div>
          </div>
          {/* Columna 5 */}
          <div className="article-grid col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4">
            <p className=" text-primary text-6xl m-2">5</p>
            <div className="p-3">
              <p className="text-primary text-xl">Precios muy accesibles</p>
              <p>Contamos con descuentos, promociones y formas de pago.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
