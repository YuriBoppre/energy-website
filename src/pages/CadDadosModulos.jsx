import { Contexto } from '../App.js';
import { useContext } from 'react';

const CadDadosModulos = () => {
  const { setPotenciaMaximaModulo, tensaoModuloCircuitoAberto, correnteCurtoCircuito } = useContext(Contexto);

  return (
    <>
      <div className="title">CadDadosModulos</div>
      <div className="container">
        <input type="text" onChange={event => setPotenciaMaximaModulo(event.target.value)}/>
        <input type="text" onChange={event => tensaoModuloCircuitoAberto(event.target.value)}/>
        <input type="text" onChange={event => correnteCurtoCircuito(event.target.value)}/>
      </div>
    </>
  )
}

export default CadDadosModulos