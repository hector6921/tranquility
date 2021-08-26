import { CircularProgress, Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import RecDisplay from "./recdis";


function ResultsVideos() {

  const axios = require("axios");
  const [videos, setvideos] = useState([]);
  const [videosData, setvideosData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  async function getVideos() {
    var videoRequest = {
    method: 'GET',
    url: 'https://api.meetup.com/events',
}
//   headers: {
//     'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
//     'x-rapidapi-key': 'e7dfea4a7dmshfde86c3ccf68d3dp10acebjsn2a8f541569e9'
//   }
    axios.request(videoRequest).then(function (response) {
      setvideos(response.data);
      setIsDataLoaded(true)
      //insertData()
    });
    
  
}
  useEffect(() => {getVideos()}, [isDataLoaded]);
  

 function insertData(){
   setvideosData(videos.map((item,index)=>({
       "img":videos[index].volumeInfo.imageLinks.smallThumbnail,
       "title":videos[index].volumeInfo.title, 
       "author":videos[index].volumeInfo.authors,
       "description":videos[index].volumeInfo.description,
       "selflink":videos[index].accessInfo.webReaderLink
    })))
 } 
//useEffect(() => {insertData()}, [isDataLoaded]);
  console.log(isDataLoaded)
  console.log(videos)
if(isDataLoaded==true){
  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      {/* <SignInSide /> */}
      <RecDisplay  type="VIDEOS" />
      
     {/* <img src={books[0].volumeInfo.imageLinks.smallThumbnail} /> */}
    </div>
  );
}else{
    return(
        <div>
            <Container>
            <CircularProgress/>
            </Container>
        </div>
)}
}

export default ResultsVideos;
