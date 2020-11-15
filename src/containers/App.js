import React,{useState} from 'react';
//import DatePicker from "react-datepicker";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import benef from '../beneficiari.js'
//import BeneficiariList from '../components/BeneficiariList'
//import Submit from '../components/Submit'
import "react-datepicker/dist/react-datepicker.css";
import SignIn from '../components/SignIn';
import Dashboard from '../components/Dashboard';

function App () {

  const [prezentaDate, setPrezentaDate] = useState(new Date());
  //const [temp, setTemp] = useState('')
  //const [name, setName] = useState ('')
  const [prezente,setPrezente]= useState([])
  const [prezenteNr,setPrezenteNr] = useState(0)
  const [signInName,setSignInName] = useState('')
  const [signInPassword,setSignInPassword] = useState('')
  //const [admin,setAdmin] = useState(false)
  const [user,setUser] = useState({name:'',admin: false,isAuth:false})

  const onSubmit = () =>{
    // send data to server
    // fetch("http://frozen-basin-35628.herokuapp.com/daily", {
    // method: "post",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(
    //   prezente
    // ),
    // }).then((res, req) =>{
    //   alert('Am reusit'+res.body)
    // })
    // .catch(err => alert("a fost o eroare "+err))
    console.log(prezente)
  }
  
  const onCheck = (event) =>{    
    let temp = prezente
    if (event.target.checked){
      
      benef.forEach(user =>{
        if (user.name === event.target.id){
          temp.push({name:event.target.id, prezentaDate, cosemnat: user.cosemnat})
        }
      })
      setPrezenteNr(prezenteNr)
      setPrezente(temp)
    } else {
      prezente.forEach((benef, i) => {
        if (benef.name === event.target.id){
          temp.splice(i,1)
          setPrezente(temp)
          setPrezenteNr(temp.length)
        }
      })
    }
  }

    return (
     
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashBoard">
            {/* <div className="App">
              <h1>Prezente</h1>
              <DatePicker selected={prezentaDate} onChange={date => setPrezentaDate(date)}  />
              <BeneficiariList benef= {benef} onCheck={onCheck} />
              <Submit onSubmit = {onSubmit}/> 
            </div>    */}
            {user.isAuth?(
            <Dashboard prezentaDate={prezentaDate} setPrezentaDate={setPrezentaDate} benef={benef} onCheck={onCheck} onSubmit={onSubmit} user={ user }  prezente={prezente} />)
            : <Redirect to='/'/>
            }
          </Route>
          <Route path="/">
            <SignIn setSignInName={setSignInName} setSignInPassword={setSignInPassword} signInName={ signInName } signInPassword={ signInPassword } setUser={ setUser } />
          </Route>
        </Switch>
      </div>
    );
  
}

export default App;
