import React from "react";
import { Route, Routes} from "react-router-dom"
import { CharacterListContainer } from "./component/CharacterListContainer/CharacterListContainer";
import NavBar from "./component/Navbar/Navbar";
import { CharacterDetailContainer } from "./component/CharacterDeailConteiner/CharacterDetailContainer";

export default function App (){
  return <> 
    <NavBar/>
    <Routes>
    <Route path="/" element={ <CharacterListContainer/>}/>
    <Route path="/character/:id" element={ <CharacterDetailContainer/>}/>
  </Routes>
  </>
}
