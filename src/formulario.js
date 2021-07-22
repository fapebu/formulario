import React from 'react';
import axios from 'axios'

function Formulario ({inputs}) {
 
const enviar = async(e) => {
    try {
        e.preventDefault();
        const datos =  {};
            
        inputs.form.forEach( (element,index) => {
                datos[element.value] = e.target[index].value
                });
            
        const respuesta = await axios.post(`http://localhost:5000/${inputs.tipo}`,datos);
    } catch (e) {
        console.error(e);
    }
   

}


return( <>
        <form className= "grid" onSubmit={enviar} >
            {inputs.form.map((item)=>{
                   return(
                        <div className="input" key={item.value}>
                        <label>{item.value}</label>
                        <input type={item.type} name={item.value}/>
                        </div>
                    )
                })}
        
        <button type="submit">Enviar</button>
        </form>
        </>
        )
};
    
    

export default Formulario;
