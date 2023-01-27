const Alerta = ({alerta}) => {
    return (
      <div className={`${alerta.error ? 'alerta-error ' : 'alerta-check' }s`}>
        {alerta.msg}
      </div>
    )
  }
  
  export default Alerta