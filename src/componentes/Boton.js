import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton ({texto, esBontonDeClic, manejarClic}){
    return (
        <button className={ esBontonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick = {manejarClic}>
          {texto}
        </button>

    );
}

export default Boton;