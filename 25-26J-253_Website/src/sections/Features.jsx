import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { features } from '../data/content';
import heroBg from '../assets/images/app-bg.png'; // Remember to replace this image with a screenshot of your PregAssist app!

const Features = () => {
  return (
    <section id="features" className="section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Key System Features</h2>
          <p>Comprehensive support bridging routine maternal care and emergency preparedness.</p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <img src={heroBg} alt="PregAssist App Interface" className="img-fluid rounded-4 shadow-lg" style={{ border: '5px solid white' }} />
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="d-flex mb-4 p-3 hover-lift rounded" 
                data-aos="fade-left" 
                data-aos-delay={idx * 100}
                style={{ background: '#fff' }}
              >
                <div className="me-4 flex-shrink-0">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: `${item.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon size={24} color={item.color} />
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0F0A1E' }}>{item.title}</h4>
                  <p className="justified-text" style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;