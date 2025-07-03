import './App.css';
import PropTypes from 'prop-types';

function App() {

  const usuario = {
    nombre: "Jose M.",
    edad: 43,
    ciudad: "Barcelona"
  };

  return (
    <div className="App">
      <Greeting user={usuario}/>
    </div>
  );
}

function Greeting(props) {
  return (
    <div>
        <h1>This App is created by {props.user.nombre}</h1>
        <p>who is {props.user.edad} and lives in {props.user.ciudad}</p>
    </div>
  );
}

Greeting.propTypes = {
  user: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    ciudad: PropTypes.string.isRequired
  }).isRequired
};

export default App;
