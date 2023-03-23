import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pil from '../assets/img/pil.png'
// import equipo from '../assets/img/equipo-home.png'
// import hero from '../assets/img/hero-identidad.png'



function CarouselInterval() {
  return (
    <Carousel fade className="padding-x-xl padding-y-xxl z-index-1" >
      <Carousel.Item>
        <img
          className="d-block w-100 animation-img"
          src={pil}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Nos casamos!</h3>
          <p>y queremos compartirlo con vos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 animation-img"
          src={pil}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>¡Nos casamos!</h3>
          <p>y queremos compartirlo con vos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 animation-img"
          src={pil}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>¡Nos casamos!</h3>
          <p>y queremos compartirlo con vos</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInterval;