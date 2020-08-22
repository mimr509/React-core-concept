import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks =['saddam', 'bappi','joshim','alomgir','riaz','shuvo']
    const products = [{name:'photoshop', price: '90.66'},
                      {name:'adobe', price: '50.66'},
                      {name:'pdf-reader', price: '30.66'},
                      {name:'pdf-viewer', price: '20.66'},
                      ]
    
            
    
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
       <Users> </Users>
       
        <ul>
          {
              nayoks.map(nayok=> <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}> </Product> )
        }
        
        <Product product= {products[0]} > </Product>
        <Product product = {products[1]}> </Product>
        
        <Person name ="mim"></Person>
        <Person name ="mamun"></Person>
        <Person name ="masum"></Person>
        <Person name = "monzurul"></Person>
      </header>
    </div>
  );
}

 function Counter(){
   const [count,setCount] = useState(10);
   const handleIncrease = () => setCount(count+1);
     
   
   
   return(
     <div>
       <h1>count : {count}</h1>
       <button onClick={() => setCount(count-1)}>Decrease</button>
       <button onClick={() => setCount(count+1)}>Increase</button>
     </div>
   )
 }

 function Users(){
   const [users,setUsers] = useState([0])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (res=> res.json())
    .then(data=>setUsers(data));
   },[])
   return (
     <div>
       <h3>Dynamic Users:{users.length}</h3>
       <ul>
         {
           console.log(users)
         }
         {
           users.map(user=><li>{user.email}</li>)
         }
       </ul>
     </div>
   )
 }

 function Product(props){
  const ProductStyle = {
    backgroundColor:"grey",
    width: "200px",
    height: "200px",
    border:"2px solid red",
    borderRadius: "5px",
    float: "left",
  }
  const {name ,price} = props.product
  console.log(name,price)
  return(
    <div style ={ProductStyle}>
      <h4>{name}</h4>
      <h3> {price}</h3>
      <button>Buy Now</button>
    </div>
  )
 } 
function Person(props){
  const personStyle = {
   border: "2px solid red",
   margin:'20px',
   color:"red",
  }
  console.log(props);
  
  return( 
  <div style={personStyle}> 
    <h1 >Name:{props.name}</h1>
    <h2> Monzurul islam</h2>
  </div>) 
}

export default App;
