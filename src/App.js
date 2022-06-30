import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import CadDadosGerais from "./pages/CadDadosGerais";
import CadDadosModulos from "./pages/CadDadosModulos";
import CadDadosInversor from "./pages/CadDadosInversor";
import CadDadosArranjos from "./pages/CadDadosArranjos";
import ConsultaRelatorios from "./pages/ConsultaRelatorios";
import Sidebar from "./components/Sidebar";

export const Contexto = createContext({});

function App() {
  const [consumoTotalDeEnergiaAnual, setConsumoTotaldeEnergiaAnual] = useState(0);
  
  const [potenciaMaximaModulo, setPotenciaMaximaModulo] = useState(0);
  const [tensaoModuloCircuitoAberto, setTensaoModuloCircuitoAberto] = useState(0);
  const [correnteCurtoCircuito, setCorrenteCurtoCircuito] = useState(0);
  
  const [potenciaMaximaCaInversor, setPotenciaMaximaCaInversor] = useState(0);
  const [tensaoMaximaMppt, setTensaoMaximaMppt] = useState(0);
  const [tensaoMinimaMppt, setTensaoMinimaMppt] = useState(0);
  const [correnteMaximaMppt, setCorrenteMaximaMppt] = useState(0);
  const [numeroMppts, setNumeroMppts] = useState(0);
  const [quantidadeInversoresFrequencia, setQuantidadeInversoresFrequencia] = useState(0);
  
  const [dados, setDados] = useState();

  return (
    <Contexto.Provider value={{
      consumoTotalDeEnergiaAnual,
      setConsumoTotaldeEnergiaAnual,

      potenciaMaximaModulo,
      setPotenciaMaximaModulo,

      tensaoModuloCircuitoAberto,
      setTensaoModuloCircuitoAberto,

      correnteCurtoCircuito,
      setCorrenteCurtoCircuito,

      potenciaMaximaCaInversor,
      setPotenciaMaximaCaInversor,

      tensaoMaximaMppt,
      setTensaoMaximaMppt,

      tensaoMinimaMppt,
      setTensaoMinimaMppt,

      correnteMaximaMppt,
      setCorrenteMaximaMppt,

      numeroMppts,
      setNumeroMppts,

      quantidadeInversoresFrequencia,
      setQuantidadeInversoresFrequencia
    }}>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<CadDadosGerais />} />
            <Route path="/cadDadosModulos" element={<CadDadosModulos />} />
            <Route path="/cadDadosInversor" element={<CadDadosInversor />} />
            <Route path="/cadDadosArranjos" element={<CadDadosArranjos />} />
            <Route path="/consultaRelatorios" element={<ConsultaRelatorios />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </Sidebar>
      </Router>
    </Contexto.Provider>
  );
}

export default App;
