import React from 'react'

function Temperatura(props){
    return(
        <p>Temperatura:&nbsp;
          <input onChange={props.setTemp} placeholder = 'de exemplu 36.2'></input>
        </p>
    )
}
export default Temperatura;