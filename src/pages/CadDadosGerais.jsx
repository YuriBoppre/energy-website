
import { Contexto } from '../App.js';
import { useContext } from 'react';
import Salvar from '../components/Salvar';

const CadDadosGerais = () => {
    const { setConsumoTotaldeEnergiaAnual, consumoTotalDeEnergiaAnual } = useContext(Contexto);

    return (
        <>
            <div className="title">Dados gerais</div>

            <div className="container">
                <div>
                    <label>Consumo total de energia anual</label>
                    <input type="text" onChange={event => setConsumoTotaldeEnergiaAnual(event.target.value)} placeholder="0,00 KWh/ano" value={consumoTotalDeEnergiaAnual} />
                </div>
                <Salvar />
            </div>
        </>
    )
}

export default CadDadosGerais