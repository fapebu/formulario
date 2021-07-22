import React,{useState} from 'react';

import './App.css';
import Formulario from './formulario';
import {Persona,Libro,Cetegoria} from './inputs'

function App() {
  
  const[datos,setDatos] = useState(Persona()); 
 
const Handleinputs = (e) =>{
  let form ;  
  switch(e.target.name){
      case "persona" : 
        form = Persona();
        setDatos(form);
        break;
      case "libro" :
        form = Libro();
        setDatos(form);
        break;
      case "categoria" :
        form = Cetegoria();
        setDatos(form);
        break;
    }
  }

return (
    <>
    <Formulario inputs = {datos} />
    <button  name ="persona" onClick={Handleinputs}>Persona</button>
    <button  name ="libro" onClick={Handleinputs}>Libro</button>
    <button  name ="categoria" onClick={Handleinputs}>Categoria</button>
    </>
  );
}

export default App;
