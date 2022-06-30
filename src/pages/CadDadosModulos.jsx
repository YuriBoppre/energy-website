import { Contexto } from '../App.js';
import { useContext } from 'react';

const CadDadosModulos = () => {
  const { setPotenciaMaximaModulo, tensaoModuloCircuitoAberto, correnteCurtoCircuito } = useContext(Contexto);

  return (
    <>
      <div className="title">Dados dos módulos</div>
      <div className="containerDadosModulos">
        <div>
          <label htmlFor="">Potência máxima</label>
          <input type="text" placeholder="0,00 Pmp (W)" onChange={event => setPotenciaMaximaModulo(event.target.value)} />
        </div>
        <div>
          <label htmlFor="">Tensão em circuito aberto</label>
          <input type="text" placeholder="0,00 Voc (V)"  onChange={event => tensaoModuloCircuitoAberto(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Corrente de curto-circuito</label>
          <input type="text" placeholder="0,00 Ish (A)" onChange={event => correnteCurtoCircuito(event.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default CadDadosModulos