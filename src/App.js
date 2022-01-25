import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var style = {
    backgroundColor : 'white',
    color : 'black'
  }
  const products = [
    {name : 'Photoshop', price : '$99.99'},
    {name : 'Illustrator', price : '$97.78'}
  ];


  return (
    <div className="App">
      <header className="App-header">
        
        <p style={style}>My First React Paragraph</p>
        <Counter></Counter>
        <h2 style={{backgroundColor:'yellow', color:'goldenrod'}}>First React Heading</h2>

        <Person name={"Rahat Siddique"} job={"Learner"}></Person>
        <Person name={"Maruf Ahamed"} job={"MERN Stack Developer"}></Person>

      </header>
    </div>
  );
}



function Person(props){
  const personStyle = {
    border : "2px solid gold",
    width : "400px",
    margin : "10px",
    padding : "10px 15px"
  }
  return (
    <div style={personStyle}>
      <h3>Name : {props.name} </h3>
      <p>Proffession : {props.job} </p>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    let newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}





export default App;
