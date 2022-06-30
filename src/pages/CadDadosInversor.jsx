import { Contexto } from '../App.js';
import { useContext } from 'react';

const CadDadosInversor = () => {
    const { setPotenciaMaximaCaInversor, setTensaoMaximaMppt, setTensaoMinimaMppt, setNumeroMppts, setQuantidadeInversoresFrequencia } = useContext(Contexto);

    return (
        <>
            <div className="title">Dados do inversor</div>
            <div className="container">
                <div>
                    <label>Potência máxima CA</label>
                    <input type="text" placeholder="Maximum AC Power (W)" onChange={event => setPotenciaMaximaCaInversor(event.target.value)} />
                </div>
                <div>
                    <label>Tensão máxima MPPT</label>
                    <input type="text" placeholder="Maximum MPPT DC voltage (V)" onChange={event => setTensaoMaximaMppt(event.target.value)} />
                </div>
                <div>
                    <label>Tensão mínima MPPT</label>
                    <input type="text" placeholder="Minimum MPPT DC voltage (V)" onChange={event => setTensaoMinimaMppt(event.target.value)} />
                </div>
                <div>
                    <label>Corrente Máxima MPPT</label>
                    <input type="text" placeholder="Maximum DC Current (A)" onChange={event => setNumeroMppts(event.target.value)} />
                </div>
                <div>
                    <label>Número de MPPTs</label>
                    <input type="number" placeholder="0" onChange={event => setQuantidadeInversoresFrequencia(event.target.value)} />
                </div>
                <div>
                    <label>Quantidade de inversores</label>
                    <input type="number" placeholder="0" />
                </div>
            </div>
        </>
    )
}

export default CadDadosInversor