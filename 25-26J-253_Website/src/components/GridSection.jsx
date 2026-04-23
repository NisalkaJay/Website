import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaFilePdf, FaTv } from 'react-icons/fa';

const GridSection = ({ id, title, subtitle, items, isPresentation = false, bgClass = "" }) => {
  // Smart column sizing: If there are 4 items, fit 4 on a row (lg=3). Otherwise, fit 3 (lg=4).
  const colSize = items.length === 4 ? 3 : 4;

  return (
    <section id={id} className={bgClass}>
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* Added justify-content-center to keep everything perfectly centered */}
        <Row className="g-4 justify-content-center">
          {items.map((item, idx) => (
            <Col key={idx} md={6} lg={colSize} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="p-4 rounded-4 text-center hover-lift h-100 shadow-sm" style={{
                background: '#ffffff',
                border: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="mb-4 d-inline-block p-1" style={{
                    fontSize: '60px',
                    color: '#51A2FF' 
                  }}>
                    {item.icon ? <item.icon /> : (isPresentation ? <FaTv /> : <FaFilePdf />)}
                  </div>
                  <h4 style={{ 
                    fontSize: '22px', 
                    fontWeight: '800', 
                    color: '#2d3748',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h4>
                  <p className="mt-3 justified-text" style={{ 
                    fontSize: '14px', 
                    color: '#4a5568',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
                
                {/* Updated Button to act as an anchor tag for file downloads */}
                <Button 
                  as="a"
                  href={item.file}
                  download
                  variant="outline-primary" 
                  className="mt-4 w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    borderColor: 'var(--accent-violet)',
                    color: 'var(--accent-violet)',
                    fontWeight: '700',
                    borderRadius: '8px',
                    textDecoration: 'none' // Important to remove the link underline
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-light)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--accent-violet)';
                  }}
                >
                  <FaDownload /> Download
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GridSection;