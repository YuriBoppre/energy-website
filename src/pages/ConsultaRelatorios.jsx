import { Contexto } from '../App.js';
import { useState, useEffect, useContext } from 'react';
import { api } from '../utils/api.js';

const ConsultaRelatorios = () => {
    const [dados, setDados] = useState({});

    useEffect(() => {
        api.get('/relatorio')
            .then(res => setDados(res.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <div className="title">ConsultaRelatorios</div>
            
            <div>Geração energia fotovotaica</div>
            <br />
            <div>mínimo: {dados.geracaoFotovotaica.minimoGeracaoEnergia}</div>
            <br />
            <div>presente: {dados.geracaoFotovotaica.presenteGeracaoEnergia}</div>
            <br />
            <div>máximo: {dados.geracaoFotovotaica.maximoGeracaoEnergia}</div>
            <br />
            <br />

            <div>Potencia do inversor</div>
            <br />
            <div>mínimo: {dados.potenciaInversor.minimaPotenciaInversor}</div>
            <br />
            <div>presente: {dados.geracaoFotovotaica.presentePotenciaInversor}</div>
            <br />
            <div>máximo: {dados.geracaoFotovotaica.maximoPotenciaInversor}</div>

            <div></div>
        </>
    )
}

export default ConsultaRelatorios