import React from 'react';
//import User from './User';
import './App.css';
import { Table } from 'react-bootstrap';
//import Stud from './Stud';
//import Array_List from './Array_List';

function App() {
 //const data=['p','a','c'];
 const data=[
   {name:"pinaki",Email:"pinaki@sasmal", contact:"1111"},
   {name:"payan",Email:"pmal@sasmal", contact:"1111"},
   {name:"surya",Email:"asps@sasmal", contact:"1212"}

 ]
  return (
    <div className="App">
      
      <Table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>

        </tr>
    {
      data.map((item,i)=>
      
      <tr key={i}>
      <td>{item.name}</td>
      <td>{item.Email}</td>
      <td>{item.contact}</td>
      </tr>

  
      )
    }
    </tbody>
    </Table>
     </div>
      
  );

}

export default App;
