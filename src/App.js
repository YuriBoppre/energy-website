import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CadDadosGerais from "./pages/CadDadosGerais";
import CadDadosModulos from "./pages/CadDadosModulos";
import CadDadosInversor from "./pages/CadDadosInversor";
import CadDadosBasicos from "./pages/CadDadosBasicos";
import ConsultaRelatorios from "./pages/ConsultaRelatorios";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<CadDadosGerais />} />
          <Route path="/cadDadosModulos" element={<CadDadosModulos />} />
          <Route path="/cadDadosInversor" element={<CadDadosInversor />} />
          <Route path="/cadDadosBasicos" element={<CadDadosBasicos />} />
          <Route path="/consultaRelatorios" element={<ConsultaRelatorios />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
