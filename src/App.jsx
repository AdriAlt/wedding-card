import Header from "./components/header";
import React from "react";
import Carousel from "./components/carouselInterval";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cronometro from "./components/cronometro";
import Historia from "./components/historia";
import Lugar from './components/lugar'
import Galeria from './components/galeria'
import Redes from './components/redes'
import Regalos from './components/regalos'
import Alojamiento from './components/alojamiento'
import Asistencia from './components/asistencia'
import './assets/css/style.css'

function App() {
  return (
    <div>
         <Header/>
         <Carousel/>
         <Cronometro/>
         <Historia/>
         <Lugar/>
         <hr  className="border-1"/>
         <Galeria></Galeria>
         <Redes></Redes>
         <Regalos></Regalos>
         <Alojamiento></Alojamiento>
         <Asistencia></Asistencia>
    </div>

  );
}

export default App;

