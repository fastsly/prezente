import React from 'react'
//import { Checkbox } from '@bit/segmentio.evergreen.checkbox';
import Input from "./Input"
import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-start",
      
    },
    input:{
        width: "250px",
        fill: 'orange',
        stroke: 'black',
        // borderStyle: "solid",
        padding:"10px 1px 1px 10px"
    },
    temp:{
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        width: "50px",
        justifyContent:" flex-end"
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "row",
    },
    fixedHeight: {
      height: 240,
    },
  }));


function BeneficiariList (props){
    // const benefArray = props.benef.map((user,i) =>{
    //     return <Checkbox label={user.name} onChange={props.onCheck} />
    //   })
    const classes = useStyles();

    return(
        <div>
        <p>Beneficiar:{' '}
            {/* <select onClick={props.onSelect}>
                {benefArray}
            </select> */}
        </p>
            <div >
                <Input benef={props.benef} onCheck={props.onCheck} classes={classes}/>
            </div>
        </div>
    )
}
export default BeneficiariList;