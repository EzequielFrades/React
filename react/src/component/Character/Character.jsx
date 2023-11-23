import { useNavigate } from "react-router-dom"

export const Character = ({ name, image, id }) => {
  
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate( `/character/${id}`)
  }                   //handle se nombra por conveniencia general
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
            <p>Nombre: {name} </p>
            <img src={image} alt="" />
            <button className="btn btn-dark mt-2" onClick={handleClick} >Detalle</button>
    </div>
  )
}
