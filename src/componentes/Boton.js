import React from 'react';

function Boton ({texto, esBontonDeClic, manejarClic}){
    return (
        <button className={ esBontonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick = {manejarClic}>
          {texto}
        </button>

    );
}

export default Boton;