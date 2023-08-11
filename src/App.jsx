import { motion } from "framer-motion";
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/routes/Home";
import { OdontologiaGeneral } from "./components/routes/OdontologiaGeneral";
import { Ortodoncia } from "./components/routes/Ortodoncia";
import { Odontopediatria } from "./components/routes/Odontopediatria";
import { ImplantesDentales } from "./components/routes/ImplantesDentales";
import { Endodoncia } from "./components/routes/Endodoncia";
import { DisenoSonrisa } from "./components/routes/DisenoSonrisa";
import { CirugiaMaxilofacial } from "./components/routes/CirugiaMaxilofacial";
import { ProtesisDentales } from "./components/routes/ProtesisDentales";
import { Periodoncia } from "./components/routes/Periodoncia";
import { Articulacion } from "./components/routes/Articulacion";
import { Fonoaudiologia } from "./components/routes/Fonoaudiologia";

function App( ) {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  const variants = {
    hidden: { opacity: 0, scale: 0 },
       visible: {
         opacity: 1,
         scale: 1,
         transition: { type: "spring", damping: 10, stiffness: 100 }
       }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home></Home>}></Route>

          <Route
            path="/OdontologiaGeneral"
            element={<OdontologiaGeneral></OdontologiaGeneral>}
          />
          <Route path="/Ortodoncia" element={<Ortodoncia></Ortodoncia>} />
          <Route
            path="/Odontopediatria"
            element={<Odontopediatria></Odontopediatria>}
          />
          <Route
            path="/ImplantesDentales"
            element={<ImplantesDentales></ImplantesDentales>}
          />
          <Route path="/Endodoncia" element={<Endodoncia></Endodoncia>} />
          <Route
            path="/DisenoSonrisa"
            element={<DisenoSonrisa></DisenoSonrisa>}
          />
          <Route
            path="/CirugiaMaxilofacial"
            element={<CirugiaMaxilofacial></CirugiaMaxilofacial>}
          />
          <Route
            path="/ProtesisDentales"
            element={<ProtesisDentales></ProtesisDentales>}
          />
          <Route path="/Periodoncia" element={<Periodoncia></Periodoncia>} />
          <Route path="/Articulacion" element={<Articulacion></Articulacion>} />
          <Route
            path="/Fonoaudiologia"
            element={<Fonoaudiologia></Fonoaudiologia>}
          />
          <Route
            path="/Fonoaudiologia"
            element={<Fonoaudiologia></Fonoaudiologia>}
          />
        </Routes>
      </BrowserRouter>
    </motion.div>
  );
}

export default App;
