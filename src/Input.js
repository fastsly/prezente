import React from 'react'

function Input(props){
    //<label>Putnoki Lorand</label><input onChange="" id="putnoki" type="checkbox" ><label>Temperatura</label><input type="text"></input>
    const benefArray = props.benef.map((user,i) =>{
        return (<div>
                <label>{user.name}</label><input onChange={props.onCheck} id={user.name} type="checkbox"></input><input type="text" placeholder="Temperatura"></input>
            </div>)
      })
    return(
        <div>
            {benefArray}
        </div>
    )
}
export default Input;