import React,{useState,useEffect} from "react";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Split from "./Component/Split";
import axios from "axios";
// const axios=require("axios");




function App(){
    const[data , setData ]=useState([]);
    useEffect(()=>{

    
    axios.get('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
  .then(response => {
    // handle success
    setData(response.data.texts);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });
}, [])
//   console.log(data);
    return (
        <div>
            <Navbar/>
            <Header />
            <Split data={data}/>
        </div>
    );

    
}

export default App;