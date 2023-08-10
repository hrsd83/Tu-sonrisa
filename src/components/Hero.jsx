import { Link } from "react-router-dom";

const Hero = () => {
  const phoneNumber = "+541143998712";

  const renderCard = (imageSrc, title, route) => {
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
          <Link
            to={route}
            className="text-primary h-10 bg-white hover:bg-primary hover:text-white border-1 px-6 py-3 mr-2 rounded md:h-10 md:px-1 md:py-2 lg:px-2"
          >
            Más info
          </Link>

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
          "ODONTOLOGÍA GENERAL",
          "/OdontologiaGeneral"
        )}
        {/* Card 2 */}
        {renderCard(
          "especialidades/ortodoncia.png",
          "ORTODONCIA",
          "/Ortodoncia"
        )}
        {/* Card 3 */}
        {renderCard(
          "especialidades/odontopediatria.png",
          "ODONTOPEDIATRÍA",
          "/Odontopediatria"
        )}
        {/* Card 4 */}
        {renderCard(
          "especialidades/implantes.png",
          "IMPLANTES DENTALES",
          "/ImplantesDentales"
        )}
        {/* Card 5 */}
        {renderCard(
          "especialidades/endodoncia.png",
          "ENDODONCIA",
          "/Endodoncia"
        )}
        {/* Card 6 */}
        {renderCard(
          "especialidades/diseñoSonrisa.png",
          "DISEÑO DE SONRISA",
          "/DisenoSonrisa"
        )}
        {/* Card 7 */}
        {renderCard(
          "especialidades/maxilofacial.png",
          "CIRUGÍA BUCAL Y MAXILOFACIAL",
          "/CirugiaMaxilofacial"
        )}
        {/* Card 8 */}
        {renderCard(
          "especialidades/protesis.png",
          "PROTESIS DENTALES",
          "/ProtesisDentales"
        )}
        {/* Card 9 */}
        {renderCard(
          "especialidades/periodoncia.png",
          "PERIODONCIA",
          "/Periodoncia"
        )}
        {/* Card 10 */}
        {renderCard(
          "especialidades/articulacion.png",
          "ATM-ARTICULACIÓN TÉMPORO MANDIBULAR",
          "/Articulacion"
        )}
        {/* Card 11 */}
        {renderCard(
          "especialidades/fonoaudiologia.png",
          "FONOAUDIOLOGÍA",
          "/Fonoaudiologia"
        )}
      </div>
    </section>
  );
};

export default Hero;
