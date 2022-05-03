import React from 'react'

class User extends React.Component{
    componentWillUnmount()
    {
        console.log("delete")
        alert("delete")
    }
    render(){
        return (
            <h1>Hello</h1>
        
           )
        }
     
     
}
export default User;//this is jsx->javascript xml