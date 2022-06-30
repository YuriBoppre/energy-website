import { useState, useEffect } from 'react';
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
            <div></div>
        </>
    )
}

export default ConsultaRelatorios