import React,{useEffect,useState} from 'react'
//import './App.css';
function Stud(props){
     useEffect(()=>{
        alert("Are  you wnat to delete ?")
     },[props.data,props.counter])
         
     
    

   return(
      <div className="App">
          <h2>DATA:{props.data}</h2>
          <h2>Counter:{props.counter}</h2>
      </div>
    );
}
export default Stud;





//use props and state