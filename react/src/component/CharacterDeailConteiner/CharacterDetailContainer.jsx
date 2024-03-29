import { useEffect, useState } from "react"
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";
import { useParams } from "react-router-dom";

export const CharacterDetailContainer = () => {
    const [character, setCharacter] = useState(null);
    const  { id } = useParams()

    const getCharacter = async (id) => {
        try {
            const resp = await fetch( `https://rickandmortyapi.com/api/character/${id}` );
            const data = await resp.json();
            setCharacter(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        getCharacter(id)
     }, [])

  return (
    <div className="container d-flex justify-content-center mt-5">
        { character && <CharacterDetail { ...character } /> }
    </div>
  )
}
