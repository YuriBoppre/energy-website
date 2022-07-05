
import { Contexto } from '../App.js';
import { useContext } from 'react';

const CadDadosArranjos = () => {
    const { setNumeroTotalModulos, numeroTotalModulos, mppts, setMppts } = useContext(Contexto);

    return (
        <>
            <div className="title">Dados Básicos MPPTs</div>
            <div className="container">
                <div className="container">
                    <div>
                        <label>Nº de mudulos</label>
                        <input type="number" onChange={event => setNumeroTotalModulos(event.target.value)} value={numeroTotalModulos} />
                    </div>
                </div>
                <div className="containerModulos">
                    <div className="containerum">
                        <div>
                            <label>Número de strings</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[0].numero_strings = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Módulos por string</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[0].modulos_string = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Azimute(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[0].azimute = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Inclinação(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[0].inclinacao = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                    </div>
                    <div className="containerDois">
                        <div>
                            <label>Número de strings</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[1].numero_strings = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Módulos por string</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[1].modulos_string = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Azimute(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[1].azimute = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Inclinação(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[1].inclinacao = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                    </div>
                    <div className="containerTres">
                        <div>
                            <label>Número de strings</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[2].numero_strings = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Módulos por string</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[2].modulos_string = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Azimute(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[2].azimute = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Inclinação(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[2].inclinacao = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                    </div>
                    <div className="containerQuatro">
                        <div>
                            <label>Número de strings</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[3].numero_strings = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Módulos por string</label>
                            <input type="text" placeholder="0" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[3].modulos_string = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Azimute(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[3].azimute = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                        <div>
                            <label>Inclinação(°)</label>
                            <input type="text" placeholder="0°" onClick={event => {
                                const newMppts = [...mppts]
                                newMppts[3].inclinacao = event.target.value;
                                setMppts(newMppts)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadDadosArranjos