import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./recdis.css";
import DialogTitle from '@material-ui/core/DialogTitle';
import { ListItem, ListItemText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    //overflow: 'hidden',
    maxWidth: '75%',
    maxHeight:'20%',
    // border:'1px white solid'
    
    //backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    //position:'inherit'
    //overflow: 'scroll',
    display:'flex',
    WebkitOverflowScrolling:'touch',

    height:'30%'
  },
  title: {
    
  },
  //titleBar: {
    //background:
     // 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
        
    //},
  container:{
      width:'100vw',
      height:'100vh',
      display:'flex',
      flexDirection:'row',
      flexWrap: 'wrap'
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function RecDisplay(props) {
  const classes = useStyles();
console.log(props)
  return (
    //   <div className={classes.container}>
    <div className={classes.root}>
        <DialogTitle style={{color:'#fff'}}>{props.type}</DialogTitle>
      <ImageList className={classes.imageList} style={{height:'55vh',display:'flex'}} cols={10}>
        {props.info.map((item) => (
          <ImageListItem id='recitem' key={item.img} style={{width:'21.3%',marginLeft:'25px',height:'380px'}}>
            <a target='#_blank' href={item.selflink}><img style={{padding:'1px',objectFit:'cover',height:'65%',width:'100%'}} src={item.img} alt={item.title} />
            <ImageListItemBar
            position='top'
            style={{background:'transparent'}}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            /></a>
             <div style={{fontSize:15,top:'65%',color:"#000",fontWeight:900}}>{item.title}</div>
             <div style={{fontSize:12,top:'65%',color:"#000"}}>{`By: ${item.author}`}</div>
             <div style={{fontSize:10,top:'65%',color:"#000"}}>{item.description}</div>  
          </ImageListItem>
          
          
        ))}
      </ImageList>
      
    </div>
//    </div>
  );
}
