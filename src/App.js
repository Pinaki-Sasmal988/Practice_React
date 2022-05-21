import React,{useRef} from 'react';
//import User from './User';
import './App.css';
//import { Table } from 'react-bootstrap';
//import Stud from './Stud';
//import Array_List from './Array_List';
//import Child from './Child';
//import Them from './Them';
  import RefApplication from './RefApplication';
  import ControlComponent from './ControlComponent';

function App() {
  let InputRef=useRef(null);
function submit(){
  InputRef.current.value="1000";
  InputRef.current.style.color="red";

}



 //const data=['p','a','c'];
 /*function add(value){
   alert(value);
 }*/
  return (
    <div className="App">
      <RefApplication val={InputRef}/>
        <button onClick={submit}>Update</button>
       <ControlComponent></ControlComponent>
      </div>
  );
  
  
}
/*<Child data={add}></Child>*/
export default App;
