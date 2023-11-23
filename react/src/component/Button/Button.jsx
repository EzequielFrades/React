export const Button = ({ text = "Botón", variant = "btn-primary", functionClick, color, bClass}) => {
    
  return (
    <button className={`btn ${variant} m-2 ${bClass}`} onClick={functionClick} > { text } </button>
  )
}