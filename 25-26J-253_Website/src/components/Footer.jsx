import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronUp } from 'react-icons/fa';
// Make sure your footerInfo in '../data/content' is updated with SLIIT details!
import { footerInfo } from '../data/content'; 

export const Footer = () => {
  return (
    <footer style={{ background: '#080512', padding: '60px 0 30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '25px', fontSize: '20px', textTransform: 'uppercase' }}>
              PregAssist
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.8' }} className="mb-4">
              A comprehensive mobile integrated support system leveraging predictive analytics, explainable AI, federated learning, and Augmented Reality to support maternal and fetal healthcare.
            </p>
            <div style={{ color: '#e2e8f0', fontSize: '14px' }}>
              <p className="mb-1"><strong>Institution:</strong> {footerInfo.institution}</p>
              <p><strong>Location:</strong> {footerInfo.location}</p>
              <p className="mb-1 mt-2"><strong>Phone:</strong> {footerInfo.phone}</p>
              <p><strong>Email:</strong> {footerInfo.email}</p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '25px', fontSize: '18px' }}>Useful Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
              {['Home', 'About Us', 'Features', 'Milestones', 'Team'].map(link => (
                <li key={link} className="mb-2">
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">
                    <span style={{ color: '#FF8904', marginRight: '10px' }}>»</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '25px', fontSize: '18px' }}>Research Areas</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
              {/* Updated these to perfectly match the 4 modules in your paper + the tech stack */}
              {[
                'Fetal Health Classification (CTG)', 
                'Physical Risk Prediction (XGBoost)', 
                'AI Mental Health & Federated Learning', 
                'AR Emergency Training', 
                'Explainable AI (XAI)'
              ].map(item => (
                <li key={item} className="mb-2">
                  <span style={{ color: '#94a3b8' }}>
                    <span style={{ color: '#25D366', marginRight: '10px' }}>»</span> {item}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <a 
      href="#hero" 
      className={`back-to-top ${visible ? 'active' : ''}`}
    >
      <FaChevronUp />
    </a>
  );
};