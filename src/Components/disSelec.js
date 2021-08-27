import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import counting from './Images/counting.png';
import fatigue from './Images/fatigue.png';
import nausea from './Images/nausea.png';
import nervousness from './Images/nervousness.png';
import sweating from './Images/sweating.png';
import washing from './Images/washing.png';
import checking from './Images/checking.jpg';
import orderliness from './Images/orderliness.png';
import './Pages/disSel.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'20px 0'
  },
  paper: {
    height: 140,
    width: 140,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    borderRadius:20,
    
    //margin: theme.spacing(2)
  },
  control: {
    padding: theme.spacing(2),
  },
  buttons:{
      display:'flex',
      justifyContent:'center',
      margin: '10px 0',
  },
  pics:{
      height:'75%',
      width:'75%',
  },
  ckbox:{
      '&checked':{
          paper:{
              backgroundColor:'#30ba8f'
            }
      },
      position:'absolute',
      opacity:0,
      zIndex: '-99'
      
  },
  label:{
      backgroundColor:'black',
      height:'140px',
      width:'140px',
      position:'absolute',
      opacity:0
    
  }
//   selection:{
//       maxWidth:'0%'
//   }
}));

export default function DisSel() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [pics, setPics] = useState([fatigue,nausea,nervousness,sweating,counting,washing,checking,orderliness])
  const [picsName, setPicsName] = useState(['fatigue','nausea','nervousness','sweating','counting','washing','checking','orderliness'])
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  
 const reset = (e) => {
    e.preventDefault()
    
    pics.map((item,index)=>document.getElementById(`ckbox${index}`).checked = false)

 }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid className={classes.selection} container justifyContent="center" spacing={spacing}>
          {[0,1,2,3,4,5,6,7].map((value) => (
            <Grid key={value} item>
                 <input className={classes.ckbox} id={`ckbox${value}`}  type='checkbox'/>
              <label className={classes.label} for={`ckbox${value}`} id={`label${value}`}></label>
            <Paper id={`paper${value}`} className={classes.paper} >
                <img className={classes.pics}  src={pics[value]} />
                <Typography style={{fontFamily:'sans-serif' ,fontWeight:900}} >{picsName[value]}</Typography>
            </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className={classes.buttons} item xs={12}>
      <Fab variant="extended"    style={{
              backgroundColor: "#d3a955",
              color: "#000",
              fontWeigh: 900,
            }}><Button id='reset' onClick={reset}>RESET</Button></Fab>
            <div style={{width:20}}></div>
      <Fab variant="extended"    style={{
              backgroundColor: "#d3a955",
              color: "#000",
              fontWeight: 900,
            }}><Button>SUBMIT</Button></Fab>

      </Grid>
      </Grid>
  );
}
