import logo from './logo.svg';
import './App.css';

function App() {
  var style = {
    backgroundColor : 'white',
    color : 'black'
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <p style={style}>My First React Paragraph</p>
        <h2 style={{backgroundColor:'yellow', color:'goldenrod'}}>First React Heading</h2>

      </header>
    </div>
  );
}

export default App;
