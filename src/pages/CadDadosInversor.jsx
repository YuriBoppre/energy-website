import { Contexto } from '../App.js';
import { useContext } from 'react';

const CadDadosInversor = () => {
    const { setPotenciaMaximaCaInversor, setTensaoMaximaMppt, setTensaoMinimaMppt, setNumeroMppts, setQuantidadeInversoresFrequencia } = useContext(Contexto);
    
    return (
        <>
            <div className="title">CadDadosInversor</div>
            <div className="container">
                <input type="text" onChange={event => setPotenciaMaximaCaInversor(event.target.value)}/>
                <input type="text" onChange={event => setTensaoMaximaMppt(event.target.value)}/>
                <input type="text" onChange={event => setTensaoMinimaMppt(event.target.value)}/>
                <input type="text" onChange={event => setNumeroMppts(event.target.value)}/>
                <input type="text" onChange={event => setQuantidadeInversoresFrequencia(event.target.value)}/>
            </div>
        </>
    )
}

export default CadDadosInversor