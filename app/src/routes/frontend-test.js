import React from 'react';
import { Container } from 'react-bootstrap';
import AboutUs from '../component/AboutUs.js';
import Quote from '../component/Quote.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from '../component/Classes.js';
import '../App.css';


function FrontendTest() {
  return (
    <div className="App">
      <Container fluid>
      <AboutUs></AboutUs>
      <Quote></Quote>
      <Classes></Classes>
      </Container>
    </div>
  );
}

export default FrontendTest;
