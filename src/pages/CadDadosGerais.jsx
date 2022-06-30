
import { Contexto } from '../App.js';
import { useContext } from 'react';
import Salvar from '../components/Salvar';

const CadDadosGerais = () => {
    const { setConsumoTotaldeEnergiaAnual } = useContext(Contexto);

    return (
        <>
            <div className="title">CadDadosGerais</div>

            <label>Consumo total de energia anual</label>
            <input type="text" onChange={event => setConsumoTotaldeEnergiaAnual(event.target.value)}/>

            <Salvar />
        </>
    )
}

export default CadDadosGerais