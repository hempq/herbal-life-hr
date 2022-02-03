import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import MediaQuery from 'react-responsive'
import bg1 from '../img/bg.png';
import Image1 from '../img/Image1.png';

class AboutUs extends Component {
  render() {
    const bgStyle = {
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    };
        
    const aboutUsStyleDesktop = {
      color: 'rgb(76, 119, 235)',
      lineHeight: 1.25,
      textAlign: 'left',
      fontSize: '72px',
      textIndent: '0.45px',
      margin: '10rem 0 0 0'
    };
    
    const aboutUsStyleMobile = {
      color: 'rgb(76, 119, 235)',
      lineHeight: 1.25,
      textAlign: 'left',
      fontSize: '40px',
      textIndent: '0.45px',
      margin: "-2rem 0 0 0"
    };

    const welcomeStyleDesktop = {
      color: 'rgb(153, 170, 222)',
      lineHeight: 1.25,
      textAlign: 'left',
      fontSize: '18px',
      textIndent: '0.45px',
    };
    
    const welcomeUsStyleMobile = {
      color: 'rgb(153, 170, 222)',
      lineHeight: 1.25,
      textAlign: 'left',
      fontSize: '14px',
      textIndent: '0.45px',
    };

    return <div>
    <MediaQuery minWidth={1224}>
      <div style={bgStyle} fluid>
        <Row md={{ span: 4, offset: 2 }} xs lg="3" className="align-items-center justify-content-center" >
          <Col className="m-5" md={{ span: 4, offset: 2 }} xs lg="4">
            <div>
              <h1 style={aboutUsStyleDesktop}>About Us</h1>
              <p style={welcomeStyleDesktop}>Welcome To Wand Yoga Studio</p>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row md={{ span: 4, offset: 2 }} xs lg="3" className="align-items-center justify-content-center mt-5">
          <Col className="m-5" md={{ span: 4, offset: 2 }} xs lg="4">
            <div className="mt-5 lh-base">
              <p>We offers over 4,000 professionally-filmed online yoga classes taught by experienced, certified yoga teachers to customers around the world. We believe that yoga should be accessible to everyone and our classes are designed to give you an in-studio e
                xperience, at an affordable price, in your own home.</p> 
              <p>Wand Yoga is designed and created specifically to serve YOU. Our goal is to create a destination for people of all experience levels and backgrounds to practice, grow, and heal. Our mission is to create a community of health and wellbeing through the practice of yoga. Wand Yoga  is a space that will inspire growth and self-awareness. Our passion is to motivate one’s desire to achieve their full potential. Wand Yoga  will welcome and encourage you every step of the way!</p>
            </div>       
          </Col>
          <Col>
            <Image fluid src={Image1}></Image>
          </Col>
        </Row>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={1224}>
      <div style={bgStyle} fluid>
        <Row className="align-items-center justify-content-center">
          <Col className="m-5" sm={{ span: 4, offset: 2 }} xs lg="3">
            <div>
              <h1 style={aboutUsStyleMobile}>About Us</h1>
              <p style={welcomeUsStyleMobile}>Welcome To Wand Yoga Studio</p>
              </div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center mt-5 mx-4">
          <Col md="auto" >
            <div className="mt-2 text-start lh-base">
              <p>We offers over 4,000 professionally-filmed online yoga classes taught by experienced, certified yoga teachers to customers around the world. We believe that yoga should be accessible to everyone and our classes are designed to give you an in-studio e
                xperience, at an affordable price, in your own home.</p> 
              <p>Wand Yoga is designed and created specifically to serve YOU. Our goal is to create a destination for people of all experience levels and backgrounds to practice, grow, and heal. Our mission is to create a community of health and wellbeing through the practice of yoga. Wand Yoga  is a space that will inspire growth and self-awareness. Our passion is to motivate one’s desire to achieve their full potential. Wand Yoga  will welcome and encourage you every step of the way!</p>
            </div>       
          </Col>
          <Col md="auto" className="d-flex m-5" sm={{ span: 4, offset: 2 }}>
            <Image fluid src={Image1}></Image>
          </Col>
        </Row>
      </div>
    </MediaQuery>
    </div>

  }
}

export default AboutUs;


