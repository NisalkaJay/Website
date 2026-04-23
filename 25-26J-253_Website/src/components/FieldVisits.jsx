import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { fieldVisits } from '../data/content';

const FieldVisits = () => {
  return (
    <section id="field-visits" className="section-bg" style={{ background: '#f8f9fa', padding: '80px 0' }}>
      <Container>
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2 style={{ color: '#000000', fontWeight: '800' }}>Clinical Field Research</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Bridging the gap between technology and real-world medical practice through direct consultation with healthcare professionals.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {fieldVisits.map((visit, idx) => (
            <Col key={idx} md={6} lg={4} data-aos="fade-up" data-aos-delay={idx * 150}>
              <Card className="h-100 border-0 shadow-sm hover-lift rounded-4 overflow-hidden">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <Card.Img 
                    variant="top" 
                    src={visit.image} 
                    alt={visit.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <Card.Body className="p-4 bg-white">
                  <Card.Title style={{ fontWeight: '700', color: '#2d3748', fontSize: '1.2rem' }}>
                    {visit.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {visit.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FieldVisits;