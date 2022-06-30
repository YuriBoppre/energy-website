const CadDadosModulos = () => {
  return (
    <>
      <div className="title">Dados dos módulos</div>
      <div className="containerDadosModulos">
        <div>
          <label htmlFor="">Potência máxima</label>
          <input type="text" placeholder="0,00 Pmp (W)"/>
        </div>
        <div>
          <label htmlFor="">Tensão em circuito aberto</label>
          <input type="text" placeholder="0,00 Voc (V)"/>
        </div>
        <div>
          <label htmlFor="">Corrente de curto-circuito</label>
          <input type="text" placeholder="0,00 Ish (A)"/>
        </div>
      </div>
    </>
  )
}

export default CadDadosModulos