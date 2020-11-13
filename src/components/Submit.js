import React from 'react'
import Button from "@material-ui/core/Button";

function Submit (props){
    return (
        <Button id='button' onClick={props.onSubmit} variant="contained" color="primary" style={{width:"150px", padding:"10px", margin:"10px"}}>Submit</Button>
    )
}

export default Submit;