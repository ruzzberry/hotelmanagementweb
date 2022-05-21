import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Visitcarousel = () => {
  return (
    <Carousel controls = {false} fade={true}>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/img/carousel1.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>DELUXE ROOMS</h3>
          <p>Rooms are instagram worthy, and aesthetically pleasing.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/img/carousel2.jpg"
        alt="Second slide"
        />
        <Carousel.Caption>
          <h3>CLEAN ROOMS</h3>
          <p>We love our clients, and we always clean the suites.</p>
        </Carousel.Caption>
      </Carousel.Item>
  
      <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/img/carousel3.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
          <h3>QUALITY SERVICE</h3>
          <p>Serving finest room service, meal, and trained staffs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


  )
}

export default Visitcarousel;