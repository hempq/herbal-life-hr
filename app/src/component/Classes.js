import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import VectorSmartObject from '../img/VectorSmartObject.png';
import classes1 from '../img/classes1.png';
import classes2 from '../img/classes2.png';
import classes3 from '../img/classes3.png';
import { Image } from "react-bootstrap";


class Classes extends Component {
  render() {
    const cardData = [
      { 'id': '1', 'tittle': 'Basic Step', 'img': classes1, 'text': 'This class is designed for first time yogis. It\'s the right class for you if you want to learn the fundamentals of yoga in a group where everyone is new. The teacher will give you some background on yoga while you\'re seated, but come prepared to move. You’ll walk out feeling embodied, empowered, energized, and eager to come back.'},
      { 'id': '2', 'tittle': 'Level 1 Classes', 'img': classes2, 'text':'We recommend any of our classes that are designated as Level 1, such as Hatha, YogaWorks, and Flow. Level 1 caters to beginning students and focuses on the basics. You\'ll be surrounded by both brand new and returning practitioners as well as more advanced yogis who want to work on beginning poses.'},
      { 'id': '3', 'tittle': 'Gentle Yoga', 'img': classes3, 'text':'The slower pace of Wand Yoga Gentle classes make them a great choice if you want a less strenuous approach to your practice. These extremely accessible classes are perfect for anyone looking to develop a practice of conscious, mindful movement with some support—from seniors to pregnant women to world-class athletes.'},
    ]
    
    const bgStyle = {
      backgroundImage: `url(${VectorSmartObject})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center top'
    };

    const bgTittleStyle = {
      fontSize: '18px',
      color: 'rgb(116, 146, 236)',
      lineHeight: 1.333,
      textAlign: 'left',
    };


    const bgTextStyle = {
      fontSize: '14px',
      color: 'rgb(102,102, 102)',
      lineHeight: 1.714,
      textAlign: 'left',
    };

    return(
    <div style={bgStyle} className='d-flex justify-content-sm-center justify-content-md-around'>
      <Row >
        {cardData.map(card => 
        <Col key={card.id}>
          <Card className='m-5 border-0 bg-transparent' style={{ width: '16rem'}}>
            <Card.Img as={Image} variant="top" src={card.img} fluid={true} alt={card.tittle} />
            <Card.Body>
              <Card.Title style={bgTittleStyle} className='mt-1'>{card.tittle}</Card.Title>
              <Card.Text style={bgTextStyle} className='mt-4'>
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>  
        </Col>
        )}
      </Row>
    </div>
    ) 
  };
}
export default Classes;



