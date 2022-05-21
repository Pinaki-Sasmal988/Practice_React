import React,{useRef} from 'react';
function ControlComponent(){
let InputRef1=useRef(null);
let InputRef2=useRef(null);
function submit(e){
e.preventDefault();
console.log('First value is',InputRef1.current.value);
console.log('Second value is',InputRef2.current.value);
let input3=document.getElementById("input3").value
console.log("third value is",input3);

}
    return(

     <form onSubmit={submit}>
         <input type="text" ref={InputRef1} ></input>
         <input type="text" ref={InputRef2}></input>
         <input type="text" id="input3"></input>
  <button type='submit'>Submit</button>
     </form>


    );
}
export default ControlComponent;