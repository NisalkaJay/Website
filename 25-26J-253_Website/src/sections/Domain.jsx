import React, { useState } from 'react';
import { Container, Nav, Card } from 'react-bootstrap';
import { domainContent } from '../data/content';

const Domain = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(domainContent)[0]);
  const [hoveredTab, setHoveredTab] = useState(null); // Track which tab is hovered

  return (
    <section id="domain" className="py-5" style={{ background: '#fdfdfd' }}>
      <Container>
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2 style={{ color: '#000', fontWeight: '800' }}>Research Domain</h2>
          <p>Detailed breakdown of our literature survey and research objectives.</p>
        </div>

        <div className="d-flex justify-content-center mb-5" data-aos="fade-up">
          <Nav variant="pills" className="domain-filters gap-2 flex-wrap justify-content-center">
            {Object.keys(domainContent).map((tab) => (
              <Nav.Item key={tab}>
                <Nav.Link 
                  active={activeTab === tab} 
                  onClick={() => setActiveTab(tab)}
                  onMouseEnter={() => setHoveredTab(tab)}
                  onMouseLeave={() => setHoveredTab(null)}
                  style={{
                    // Logic: If active -> Orange. If hovered but not active -> Pink. Otherwise -> Transparent.
                    backgroundColor: activeTab === tab 
                      ? '#25D366' 
                      : (hoveredTab === tab ? '#128c7e' : 'transparent'),
                    
                    color: activeTab === tab || hoveredTab === tab ? '#fff' : '#0F0A1E',
                    
                    // Matches the border to the background logic
                    border: `1px solid ${activeTab === tab ? '#25D366' : '#128c7e'}`,
                    
                    borderRadius: '50px',
                    padding: '8px 20px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease', // Smooth transition for colors
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Card className="border-0 shadow-lg rounded-4 overflow-hidden" data-aos="zoom-in">
          <Card.Body className="p-4 p-md-5">
            <h3 style={{ 
              background: 'linear-gradient(135deg, #128c7e 0%, #25D366 20%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '800', 
              marginBottom: '20px' 
            }}>
              {domainContent[activeTab].title}
            </h3>
            <p className="justified-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
              {domainContent[activeTab].text}
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Domain;