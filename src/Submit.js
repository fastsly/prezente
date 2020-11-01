import React from 'react'

function Submit (props){
    return (
        <button className="mv10" id='button' onClick={props.onSubmit}>Submit</button>
    )
}

export default Submit;