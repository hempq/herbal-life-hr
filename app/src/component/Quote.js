import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg2 from '../img/bg2.png';
import MediaQuery from 'react-responsive'

class Quote extends Component {
  render() {
    const bgStyleDesktop = {
      backgroundImage: `url(${bg2})`,
      backgroundRepeat: 'repeat',
      height: '24rem',
      margin: '2rem 0 0 0'
    };

    const bgStyleMobile = {
      backgroundImage: `url(${bg2})`,
      backgroundRepeat: 'no-repeat',
      height: '24rem',
    };

    const quote = {
      fontSize: '24px',
      color: 'rgb(255, 254, 254)',
      fontStyle: 'italic',
      lineHeight: 1.5
    };

    const quoteName = {
      fontSize: '18px',
      color: 'rgb(255, 254, 254)',
      lineHeight: 1.5
    };

    return <div><MediaQuery minWidth={1224}>
        <Row className="img-fluid d-flex align-items-center" style={bgStyleDesktop} fluid>
          <Col>
            <div>
              <p style={quote} className="text-center">"Put your heart, mind, intellect and soul even into your <br /> smallest acts. This is the secret of success"</p>
              <p style={quoteName} className="text-center mt-4">Myriam Jessier</p>
            </div>
          </Col>
        </Row>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <Row className="img-fluid d-flex align-items-center" style={bgStyleMobile} fluid>
          <Col>
            <div style={{widthMax:'3rem'}}>
              <p style={quote} className="text-center">"Put your heart, mind, intellect and soul even into your  smallest acts. This is the secret of success"</p>
              <p style={quoteName} className="text-center mt-4">Myriam Jessier</p>
            </div>
          </Col>
        </Row>
      </MediaQuery>
      </div>
  }
}

export default Quote;