import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import { FaDownload, FaFilePdf, FaTv, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GridSection = ({ id, title, subtitle, items, isPresentation = false, bgClass = "" }) => {
  const colSize = items.length === 4 ? 3 : 4;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  return (
    <section id={id} className={bgClass}>
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <Row className="g-4 justify-content-center">
          {items.map((item, idx) => {
            const hasMultipleFiles = item.links && item.links.length > 0;
            
            return (
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
                      color: '#FF8904' 
                    }}>
                      {item.icon ? <item.icon /> : (isPresentation ? <FaTv /> : <FaFilePdf />)}
                    </div>
                    <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#2d3748', marginBottom: '15px' }}>
                      {item.title}
                    </h4>
                    <p className="mt-3 justified-text" style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    {hasMultipleFiles ? (
                      <>
                        <Button 
                          onClick={() => toggleExpand(idx)}
                          variant="outline-primary"
                          className="w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                          style={{
                            borderColor: 'var(--accent-violet)',
                            color: 'var(--accent-violet)',
                            fontWeight: '700',
                            borderRadius: '8px',
                            backgroundColor: 'transparent' // Explicitly set to transparent initially
                          }}
                          // Added hover effects here to match the single-file button
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--accent-light)';
                            e.currentTarget.style.color = '#fff';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--accent-violet)';
                          }}
                        >
                          {expandedId === idx ? <FaChevronUp /> : <FaChevronDown />} 
                          {expandedId === idx ? 'Close List' : 'Download Files'}
                        </Button>
                        
                        <Collapse in={expandedId === idx}>
                          <div className="mt-2 text-start">
                            {item.links.map((link, lIdx) => (
                              <a 
                                key={lIdx}
                                href={link.file} 
                                download 
                                className="d-flex align-items-center gap-2 mb-2 p-2 rounded"
                                style={{ 
                                  fontSize: '13px', 
                                  textDecoration: 'none', 
                                  color: '#4a5568',
                                  background: '#f8f9fa',
                                  border: '1px solid #eee'
                                }}
                              >
                                <FaDownload size={12} color="var(--accent-violet)" />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </Collapse>
                      </>
                    ) : (
                      <Button 
                        as="a"
                        href={item.file} 
                        download 
                        variant="outline-primary" 
                        className="w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                        style={{
                          borderColor: 'var(--accent-violet)',
                          color: 'var(--accent-violet)',
                          fontWeight: '700',
                          borderRadius: '8px',
                          textDecoration: 'none'
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
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default GridSection;