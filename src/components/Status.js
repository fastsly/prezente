import React,{useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import PopUp from './PopUp'

// Generate Status Data
function createData(name, suspended, planpers, fisamonit, registrusapt, fisaeval) {
  return { name, suspended, planpers, fisamonit , registrusapt, fisaeval};
}



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


export default function Status(props) {
  const [rows, setRows] = useState()
  const [selectedButon, setSelectedButton] = useState('')
  
  const fetchList = ()=>{
    fetch('http://localhost:3001/status', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(data => {
      //console.table(data)
      const tempRows =[]
      data.map(value =>{
        if (value.name && value.fisamonit && value.planpers){
          //console.log(new Date(value.planpers))
          const tempDate=[
            value.planpers === "N/A"?"N/A":new Date(value.planpers), 
            value.fisamonit === "N/A"?"N/A":new Date(value.fisamonit),
            value.registrusapt === "N/A"?"N/A":new Date(value.registrusapt),
            value.fisaeval === "N/A"?"N/A":new Date(value.fisaeval)
          ]
          //console.log(tempDate[0])
          tempRows.push(createData(
            value.name,
            value.suspended,
            value.planpers === "N/A" ? "N/A" : tempDate[0].toISOString().split('T')[0],
            value.fisamonit === "N/A" ? "N/A" : tempDate[1].toISOString().split('T')[0],
            value.registrusapt === "N/A" ? "N/A" : tempDate[2].toISOString().split('T')[0],
            value.fisaeval === "N/A" ? "N/A" : tempDate[3].toISOString().split('T')[0],
            ))
        }
        return null
      })
      tempRows.sort((a, b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
      setRows(tempRows)
  }).catch(console.log)
  }
  useEffect(()=>{
    //console.log(popUpseen);
    props.setPopUpSeen(!props.popUpseen)
    fetch('http://localhost:3001/status', {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(data => {
      //console.table(data)
      const tempRows =[]
      data.map(value =>{
        if (value.name && value.fisamonit && value.planpers){
          //console.log(new Date(value.planpers))
          const tempDate=[
            value.planpers === "N/A"?"N/A":new Date(value.planpers), 
            value.fisamonit === "N/A"?"N/A":new Date(value.fisamonit),
            value.registrusapt === "N/A"?"N/A":new Date(value.registrusapt),
            value.fisaeval === "N/A"?"N/A":new Date(value.fisaeval)
          ]
          //console.log(tempDate[0])
          tempRows.push(createData(
            value.name,
            value.suspended,
            value.planpers === "N/A" ? "N/A" : tempDate[0].toISOString().split('T')[0],
            value.fisamonit === "N/A" ? "N/A" : tempDate[1].toISOString().split('T')[0],
            value.registrusapt === "N/A" ? "N/A" : tempDate[2].toISOString().split('T')[0],
            value.fisaeval === "N/A" ? "N/A" : tempDate[3].toISOString().split('T')[0],
            ))
        }
        return null
      })
      tempRows.sort((a, b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
      setRows(tempRows)
  }).catch(console.log)
  },[])
  const classes = useStyles();
  
  let togglePop = () => {
    console.log(`the popupseen in status is ${props.popUpseen}`);
    props.setPopUpSeen(!props.popUpseen)
  };

  let suspend = (event)=>{
    fetch("http://localhost:3001/suspend", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {suspend:{
        name:event.target.value
        }
      }
    ),
    }).then((res, req) =>{
      
      //alert('Am reusit')
      fetchList()
      //props.toggle()
    })
    .catch(err => alert("a fost o eroare "+err))
  }
  
  return (
    <React.Fragment>
      {props.popUpseen ? null : <PopUp btn={selectedButon} toggle={togglePop} fetch={fetchList}/>}
      <Title>Starea fiselor</Title>
      <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Plan Personalizat</TableCell>
            <TableCell>Fisa Monitorizare</TableCell>
            <TableCell>Registru Saptamanal</TableCell>
            <TableCell align="left">Fisa de Evaluare</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?
          rows.map((row) => (
            !row.suspended?
            <TableRow key={row.id} >
              <TableCell><div>{row.name}<button onClick={()=>{setSelectedButton(row.name);togglePop()}}>Update</button><button value={row.name} onClick={suspend}>Suspend</button></div>
              </TableCell>
              <TableCell>{row.planpers}</TableCell>
              <TableCell>{row.fisamonit}</TableCell>
              <TableCell>{row.registrusapt}</TableCell> 
              <TableCell align="left">{row.fisaeval}</TableCell>
            </TableRow>
            :
            <TableRow key={row.id} style= {{backgroundColor:'gray'}}>
              <TableCell>{row.name}<button value={row.name} onClick={suspend}>Suspend</button></TableCell>
              <TableCell>{row.planpers}</TableCell>
              <TableCell>{row.fisamonit}</TableCell>
              <TableCell>{row.registrusapt}</TableCell> 
              <TableCell align="left">{row.fisaeval}</TableCell>
            </TableRow>
          ))
          :<TableRow>

          </TableRow>
          }
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more bene
        </Link>
      </div>
    </React.Fragment>
  );
}
