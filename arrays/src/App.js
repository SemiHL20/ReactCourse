import logo from './logo.svg';
import './App.css';

function App() {

  const miArray = ()=> {
    const numArray = [
      {id: 1, value: 11},
      {id: 2, value: 23},
      {id: 3, value: 34},
      {id: 4, value: 41},
      {id: 5, value: 59}
    ];

    return(
      <p>{numArray.map((item)=>{
        return <span key={item.id}>{item.id} {"->"} {item.value} {"|"} </span>
      })

      }</p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Arrays in React</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
