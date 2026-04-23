import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; 

const About = () => {
  return (
    <section id="about" className="section-bg" style={{ background: '#ffffff', padding: '80px 0' }}>
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2 style={{ color: '#000000', fontWeight: '800' }}>About PregAssist</h2>
          {/* Black text color for the subtitle as per your preference */}
          <p style={{ color: '#000000', fontWeight: '500' }}>
            Comprehensive pregnancy care bridging proactive monitoring and rapid emergency response.
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={7} data-aos="fade-right" className="justified-text">
            <p style={{ color: '#444', fontSize: '17px', lineHeight: '1.7' }}>
              PregAssist is a pioneering mobile-integrated support system designed to assist both pregnant mothers and healthcare professionals. By leveraging advanced machine learning and predictive analytics, we provide continuous, real-time monitoring of maternal and fetal health, ensuring high-quality care is accessible even in resource-constrained environments.
            </p>
            <p className="mt-3" style={{ color: '#444', fontSize: '17px', lineHeight: '1.7' }}>
              Our platform goes beyond basic symptom tracking. It synthesizes explainable AI for clinical decision support, privacy-preserving mental health assessments via federated learning, and an immersive Augmented Reality engine to ensure complete preparedness for high-stakes obstetric emergencies.
            </p>
            
            <ul className="mt-4" style={{ listStyle: 'none', padding: 0 }}>
              {/* Updated names to match your Team/Features sections exactly */}
              {/* Changed checkmark color to your brand Pink (#FF637E) */}
              <li className="mb-3 d-flex align-items-start">
                <span style={{ color: '#FF637E', marginRight: '10px', fontWeight: 'bold' }}>✔</span> 
                <span>Decision Support System for Fetal Health Classification</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span style={{ color: '#FF637E', marginRight: '10px', fontWeight: 'bold' }}>✔</span> 
                <span>Physical Health Monitoring and Wellness Guidance</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span style={{ color: '#FF637E', marginRight: '10px', fontWeight: 'bold' }}>✔</span> 
                <span>AI-Based Mental Health Monitoring and Risk Prediction</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span style={{ color: '#FF637E', marginRight: '10px', fontWeight: 'bold' }}>✔</span> 
                <span>AR and AI-Driven Personalized Pregnancy Emergency Training</span>
              </li>
            </ul>
          </Col>
          
          <Col lg={5} data-aos="fade-left" className="text-center">
            <img 
              src={logo} 
              alt="PregAssist" 
              className="img-fluid rounded-4" 
              style={{ 
                maxWidth: '90%', 
                padding: '20px',
                /* Updated shadow to be clean/light instead of heavy dark/violet */
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
              }} 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;