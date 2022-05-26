import './App.css';
import Card from './Components/Card.jsx';

function App() {
  const hobbies = ['Videojuegos', 'Ir a la playa', 'Peliculas', 'Musica'];
  const favoriteFood = ['Tacos', 'Pizza', 'Lasagna', 'Hamburguesas'];
  const stackTech = ['HTML', 'CSS', 'JavaScritp', 'React'];
  const titles = ['Hobbies', 'Comida favorita', 'My stack'];
  const person = {
    name: 'Luis',
    age: 31,
    favoriteMovie: 'El señor de los anillos',
    favoriteMusic: 'rock',
  };

  return (
    <div className="App">
      <div className="container">
        <Card
          list={hobbies}
          color="blue"
          person={person}
          title={titles[0]}
        ></Card>
        <Card
          list={favoriteFood}
          color="red"
          person={person}
          title={titles[1]}
        ></Card>
        <Card
          list={stackTech}
          color="yellow"
          person={person}
          title={titles[2]}
        ></Card>
      </div>
    </div>
  );
}

export default App;
