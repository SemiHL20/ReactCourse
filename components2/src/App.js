import './App.css';
import PropTypes from 'prop-types';
import image from './assets/elephants.jpg';

function App() {

  const usuario = {
    nombre: "Jose M.",
    apellido: "López",
    edad: 43,
    ciudad: "Barcelona"
  };

  return (
    <div 
      className="App" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
      <Greeting user={usuario}/>
    </div>
  );
}

function Greeting(props) {

  const { nombre, apellido, edad, ciudad } = props.user;

  return (
    <div>
        {/*props.user.nombre && (<h1>This App is created by {props.user.nombre} {props.user.apellido}</h1>) 
        //con el doble && si no se cumple la condición no muestra nada*/
        nombre && apellido ? (<div><h1>This App is created by {nombre} {apellido}</h1>
          <p>who is {edad} and lives in {ciudad}</p></div>) : 
        (<h1>This App is created by an anonymous user</h1>)
        }
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
