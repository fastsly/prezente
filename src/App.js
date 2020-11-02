import React from 'react';
import './App.css';
import benef from './beneficiari.js'
import BeneficiariList from './BeneficiariList'
import Submit from './Submit'

class App extends React.Component {
  constructor (){
    super();
    this.state={
      temp : '',
      name : '',
      prezente:[]
    }
  }

  onSubmit = () =>{
    //i send data to server
    fetch("http://frozen-basin-35628.herokuapp.com/daily", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      this.state.prezente
    ),
    }).then((res, req) =>{
      alert('Am reusit'+res.body)
    })
    .catch(err => alert("a fost o eroare "+err))
    //console.log('the temp of '+ this.state.name+' is '+this.state.temp)
  }

  setTemp = (event) =>{
    this.setState({temp: event.target.value})
  }

  onCheck = (event) =>{
    //this.setState({name: event.target.value})
    const date = new Date()
    let temp = this.state.prezente
    if (event.target.checked){
      
      benef.forEach(user =>{
        if (user.name === event.target.id){
          temp.push({name:event.target.id, date, cosemnat: user.cosemnat})
        }
      })
      this.setState(temp)
    } else {
      this.state.prezente.forEach((benef, i) => {
        if (benef.name === event.target.id){
          temp.splice(i,1)
          this.setState(temp)
        }
      })
    }
    console.log(this.state.prezente)
  }
  
  render(){
    return (
      <div className="App">
        <h1>Prezente</h1>
        <BeneficiariList benef= {benef} onSelect = {this.onSelect} onCheck={this.onCheck}/>
        <Submit onSubmit = {this.onSubmit}/>
      </div>
    );
  }
}

export default App;
