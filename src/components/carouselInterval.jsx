import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pil from '../assets/img/pil.png'
import equipo from '../assets/img/equipo-home.png'
import hero from '../assets/img/hero-identidad.png'



function CarouselInterval() {
  return (
    <Carousel fade className="padding-x-xl padding-y-xxl z-index-1" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pil}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={equipo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInterval;