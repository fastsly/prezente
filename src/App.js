import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import CalendarContainer from "react-datepicker";
import './App.css';
import benef from './beneficiari.js'
import BeneficiariList from './BeneficiariList'
import Submit from './Submit'
import "react-datepicker/dist/react-datepicker.css";

function App () {
  // constructor (){
  //   super();
  //   this.state={
  //     temp : '',
  //     name : '',
  //     prezente:[]
  //   }
  // }
  const [prezentaDate, setPrezentaDate] = useState(new Date());
  const [temp, setTemp] = useState('')
const [name, setName] = useState ('')
const [prezente,setPrezente]= useState([])
  const onSubmit = () =>{
    //i send data to server
    // fetch("http://frozen-basin-35628.herokuapp.com/daily", {
    // method: "post",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(
    //   this.state.prezente
    // ),
    // }).then((res, req) =>{
    //   alert('Am reusit'+res.body)
    // })
    // .catch(err => alert("a fost o eroare "+err))
    console.log('the temp of '+ name+' is '+temp+' and date is'+ prezentaDate)
  }

  // setTemp = (event) =>{
  //   this.setState({temp: event.target.value})
  // }

  const onCheck = (event) =>{
    //this.setState({name: event.target.value})
    
    let temp = prezente
    if (event.target.checked){
      
      benef.forEach(user =>{
        if (user.name === event.target.id){
          temp.push({name:event.target.id, prezentaDate, cosemnat: user.cosemnat})
        }
      })
      setPrezente(temp)
    } else {
      prezente.forEach((benef, i) => {
        if (benef.name === event.target.id){
          temp.splice(i,1)
          setPrezente(temp)
        }
      })
    }
    console.log(prezente)
  }
  
    return (
      <div className="App">
        <h1>Prezente</h1>
         <DatePicker selected={prezentaDate} onChange={date => setPrezentaDate(date)}  />
        <BeneficiariList benef= {benef} onCheck={onCheck} />
        <Submit onSubmit = {onSubmit}/>
      </div>
    );
  
}

export default App;
