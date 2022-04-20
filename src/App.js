import User from './User';
import './App.css';


function App() {
 
let data="pinaki";
  function apple(){
     alert(data);
  }
  return (
    <div className="App">
       <User name='deba'/>
       <button onload={apple()}>click me</button>
    </div>
  );

}

export default App;
