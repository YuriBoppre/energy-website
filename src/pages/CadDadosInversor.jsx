const CadDadosInversor = () => {
    return (
        <>
            <div className="title">Dados do inversor</div>
            <div className="container">
                <div>
                    <label>Potência máxima CA</label>
                    <input type="text" placeholder="Maximum AC Power (W)"/>
                </div>
                <div>
                    <label>Tensão máxima MPPT</label>
                    <input type="text" placeholder="Maximum MPPT DC voltage (V)"/>
                </div>
                <div>
                    <label>Tensão mínima MPPT</label>
                    <input type="text" placeholder="Minimum MPPT DC voltage (V)"/>
                </div>
                <div>
                    <label>Corrente Máxima MPPT</label>
                    <input type="text" placeholder="Maximum DC Current (A)"/>
                </div>
                <div>
                    <label>Número de MPPTs</label>
                    <input type="number" placeholder="0"/>
                </div>
                <div>
                    <label>Quantidade de inversores</label>
                    <input type="number" placeholder="0"/>
                </div>
            </div>
        </>
    )
}

export default CadDadosInversor