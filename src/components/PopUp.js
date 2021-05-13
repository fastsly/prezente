import React, { Component, useState } from "react";
import '../PopUp.css'


function PopUp (props){
  //value={this.state.inputValue} onChange={this.updateInputValue}
  const [planPers,setPlanpers] = useState()
  const [fisaMonit,setFisaMonit] = useState()
  const [registruSapt, setRegistruSapt] = useState()
  const [fisaEval, setFisaEval] = useState()
  const [addNameToList, setAddNameToList] = useState()

  const onPlanpersChange = (event) => {
    setPlanpers(event.target.value)
  }
  const onFisaMonitChange = (event) => {
    setFisaMonit(event.target.value)
  }
  const onRegistruSaptChange = (event) => {
    setRegistruSapt(event.target.value)
  }
  const onFisaEvalChange = (event) => {
    setFisaEval(event.target.value)
  }
  const onNamechange =(event) => {
    setAddNameToList(event.target.value)
  }

  if(props.btn === `add`){
    const addList = () =>{
      console.log(planPers)
      fetch("http://frozen-basin-35628.herokuapp.com/list/add", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {list:{
          name:addNameToList
          }
        }
      ),
      }).then((res, req) =>{
        console.log('We added new name to database')
        //alert('Am reusit')
        props.fetch()
        props.toggle()
      })
      .catch(err => alert("a fost o eroare "+err))
    }
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={props.toggle}>
            &times;
          </span>
          <div>
            <label>
              Nume:
              <input type="text" name="name"  onChange={onNamechange}/>
            </label>
            <br/>
            <input type="submit" onClick={addList}/>
          </div>
        </div>
      </div>
    );
  }else{
  const updateDates = () =>{
    console.log(planPers)
    fetch("http://frozen-basin-35628.herokuapp.com/updateStatus", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {addStatus:{
        name:props.btn,
        planpers:planPers,
        fisamonit:fisaMonit,
        registrusapt:registruSapt,
        fisaeval:fisaEval
        }
      }
    ),
    }).then((res, req) =>{
      alert('Am reusit')
      props.fetch()
      props.toggle()
    })
    .catch(err => alert("a fost o eroare "+err))
  }


  
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={props.toggle}>
            &times;
          </span>
          <div>
            <h3>{props.btn}</h3>
            <label>
              Plan Personalizat:
              <input type="text" name="name"  onChange={onPlanpersChange}/>
            </label>
            <br/>
            <label>
              Fisa Monitorizare:
              <input type="text" name="name"  onChange={onFisaMonitChange}/>
            </label>
            <br/>
            <label>
              Registru Saptamanal:
              <input type="text" name="name"  onChange={onRegistruSaptChange}/>
            </label>
            <br/>
            <label>
              Fisa de Evaluare:
              <input type="text" name="name"  onChange={onFisaEvalChange}/>
            </label>
            <br/>
            <input type="submit" onClick={updateDates}/>
          </div>
        </div>
      </div>
    );
    }
}

export default PopUp;