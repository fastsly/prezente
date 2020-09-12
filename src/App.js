import React from 'react';
import './App.css';
import benef from './beneficiari.js'
import BeneficiariList from './BeneficiariList'
import Temperatura from './Temperatura'

class App extends React.Component {
  constructor (){
    super();
    this.state={
      temp : '',
      name : ''
    }
  }

  onSubmit = () =>{
    //i send data to server
    console.log('the temp of '+ this.state.name+' is '+this.state.temp)
  }

  setTemp = (event) =>{
    this.setState({temp: event.target.value})
  }

  onSelect = (event) =>{
    this.setState({name: event.target.value})
  }
  
  render(){
    return (
      <div className="App">
        <h1>Prezente</h1>
        <BeneficiariList benef= {benef} onSelect = {this.onSelect}/>
        <Temperatura setTemp = {this.setTemp}/>
        <button id='button' onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
