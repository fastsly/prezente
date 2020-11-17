import React,{useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Status Data
function createData(name, planpers, fisamonit) {
  return { name, planpers, fisamonit };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


export default function Status() {
  const [rows, setRows] = useState()
  // useEffect(()=>{
  //   fetch('http://localhost:3001/status', {
  //   method: 'get',
  //   headers: {'Content-Type': 'application/json'}
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     //console.table(data)
  //     const tempRows =[]
  //     data.map(value =>{
  //       if (value.name && value.fisamonit && value.planpers){
  //         //console.log(value)
  //         const tempDate=[
  //           new Date(value.planpers), 
  //           new Date(value.fisamonit)
  //         ]
  //         tempRows.push(createData(
  //           value.name,
  //           tempDate[0].getFullYear()+'-'+tempDate[0].getMonth()+'-'+tempDate[0].getDate(),
  //           tempDate[1].getFullYear()+'-'+tempDate[1].getMonth()+'-'+tempDate[1].getDate()
  //           ))
  //       }
  //       return null
  //     })
  //     setRows(tempRows)
  // }).catch(console.log)
  // },[])
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Starea fiserlor</Title>
      <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Plan Personalizat</TableCell>
            <TableCell>Fisa Monitorizare</TableCell>
            {/* <TableCell>Registru Saptamanal</TableCell> */}
            {/* <TableCell align="left">Fisa de Evaluare</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?
          rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.planpers}</TableCell>
              <TableCell>{row.fisamonit}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> 
              <TableCell align="left">{row.amount}</TableCell> */}
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
