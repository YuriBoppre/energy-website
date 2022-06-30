import { api } from '../utils/api.js';
import { useContext } from 'react'
import { Contexto } from '../App.js';

const Salvar = () => {
    const { setDados, consumoTotalDeEnergiaAnual } = useContext(Contexto);

    const onSubmit = () => {
        api.post("http://localhost:8080/salvar", {
            DadosGerais: {
                consumo_total_energia_anual: consumoTotalDeEnergiaAnual
            },
            DadosModulos: {
                potencia_maxima_modulo: 0,       
                tensao_modulo_circuito_aberto: 0, 
                corrente_curto_circuito: 0,       
            },
            DadosInversor: {
                potencia_maxima_ca_inversor: 0,
                tensao_maxima_mppt: 0,
                tensao_minima_mppt: 0,
                corrente_maxima_mppt: 0,
                numero_mppts: 0,
                quantidade_inversores_frequencia: 0,
            },
            DadosArranjo: {
                numero_total_modulos: 0,
                mppts: [
                    {
                        numero_strings: 0,
                        modulos_string: 0,
                        azimute: 0,
                        inclinacao: 0,
                    },
                    {
                        numero_strings: 0,
                        modulos_string: 0,
                        azimute: 0,
                        inclinacao: 0,
                    },
                    {
                        numero_strings: 0,
                        modulos_string: 0,
                        azimute: 0,
                        inclinacao: 0,
                    },
                    {
                        numero_strings: 0,
                        modulos_string: 0,
                        azimute: 0,
                        inclinacao: 0,
                    },
                ]
            }
        }).then(res => {
            if (res.data.valido) {
                setDados(res.data.data);
            } else {
                alert(res.data.message);
            }
        }).catch(err =>{
            alert(err.message)
        });
    }

    return (
        <>
            <button onClick={onSubmit}> 
                Salvar
            </button>
        </>
    );
};

export default Salvar;