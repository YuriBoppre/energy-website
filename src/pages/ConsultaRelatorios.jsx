import { Contexto } from '../App.js';
import { useState, useEffect, useContext } from 'react';
import { api } from '../utils/api.js';

const ConsultaRelatorios = () => {
    const [dados, setDados] = useState();

    useEffect(() => {
        api.get('/relatorio')
            .then(res => setDados(res.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <div className="title">ConsultaRelatorios</div>
            {
                dados != null ? (
                    <>
                    <div className="container containerRel">
                    <div className="tituloRel">Geração energia fotovotaica</div>
                    <div><b>mínimo:</b> {dados.geracaoFotovotaica.minimoGeracaoEnergia}</div>
                    <div><b>presente:</b> {dados.geracaoFotovotaica.presenteGeracaoEnergia}</div>
                    <div><b>máximo:</b> {dados.geracaoFotovotaica.maximoGeracaoEnergia}</div>
        
                    <div className="tituloRel">Potência do inversor</div>
                    <div><b>mínimo:</b> {dados.potenciaInversor.minimoPotenciaInversor}</div>
                    <div><b>presente:</b> {dados.potenciaInversor.presentePotenciaInversor}</div>
                    <div><b>máximo:</b> {dados.potenciaInversor.maximoPotenciaInversor}</div>
                    </div>
                    </>
                ) : null

            }

        </>
    )
}

export default ConsultaRelatorios