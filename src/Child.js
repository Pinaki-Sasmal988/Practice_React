function Child(props){
let value="pinaki";
    return(
   <>
   <button onClick={()=>props.data(value)}>click</button>
   </>
    )
}
export default Child;