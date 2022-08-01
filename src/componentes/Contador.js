import React from "react";
import '../hojas-de-estilo/Contados.css'

function Contador ({ numClics }){
 return (

    <div className='contador'>
        {numClics}

    </div>
 );
}

export default Contador; 