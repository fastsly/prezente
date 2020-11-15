import React from 'react'

function Input(props){
    //<label>Putnoki Lorand</label><input onChange="" id="putnoki" type="checkbox" ><label>Temperatura</label><input type="text"></input>
    const benefArray = props.benef.map((user,i) =>{
        return (<div key={user.name} className={props.classes.input}>
                <label>{user.name}</label><input onChange={props.onCheck} id={user.name} type="checkbox"></input><input type="text" placeholder="Temperatura" className={props.classes.temp}></input>
            </div>)
      })
    return(
        <div className={props.classes.root} >
            {benefArray}
        </div>
    )
}
export default Input;