import logo from './logo.svg';
import './App.css';
import style from './style.css';
import Ess from './Ess.png';

function App() {
  return (
    <div className="App">
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title-red">Etoile Sportive du Sahel</h1>
          <br />
          <img src={Ess} alt="Jem3iya" width={400} height={300}/>
          <br />
          
        </div>
       
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HbRaXY4V5aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
  );
}

export default App;
