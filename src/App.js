import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logobatman from './imagenes/Batman-Logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks (numClicks * 0);
  };

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
          className='logo'
          src= {logobatman}
          alt='logo batman'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          texto='CLICK'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='REINICIAR'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
