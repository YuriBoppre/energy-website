import { api } from '../utils/api.js';
import { useContext } from 'react'
import { Contexto } from '../App.js';

const Salvar = () => {
    const { 
        setDados, 
        consumoTotalDeEnergiaAnual,
  
        potenciaMaximaModulo,
  
        tensaoModuloCircuitoAberto,
  
        correnteCurtoCircuito,
  
        potenciaMaximaCaInversor,
  
        tensaoMaximaMppt,
  
        tensaoMinimaMppt,
  
        correnteMaximaMppt,
  
        numeroMppts,
  
        quantidadeInversoresFrequencia,
    } = useContext(Contexto);

    const onSubmit = () => {
        api.post("http://localhost:8080/salvar", {
            DadosGerais: {
                consumo_total_energia_anual: consumoTotalDeEnergiaAnual
            },
            DadosModulos: {
                potencia_maxima_modulo: potenciaMaximaModulo,       
                tensao_modulo_circuito_aberto: tensaoModuloCircuitoAberto, 
                corrente_curto_circuito: correnteCurtoCircuito,       
            },
            DadosInversor: {
                potencia_maxima_ca_inversor: potenciaMaximaCaInversor,
                tensao_maxima_mppt: tensaoMaximaMppt,
                tensao_minima_mppt: tensaoMinimaMppt,
                corrente_maxima_mppt: correnteMaximaMppt,
                numero_mppts: numeroMppts,
                quantidade_inversores_frequencia: quantidadeInversoresFrequencia,
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