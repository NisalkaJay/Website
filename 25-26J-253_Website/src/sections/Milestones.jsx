import React, { useState } from 'react';
import { Container, Badge } from 'react-bootstrap';
import { milestones } from '../data/content';

const Milestones = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    /* Added the background-color variable to the entire section */
    <section id="milestones" style={{ backgroundColor: 'var(--light-gray)', padding: '80px 0' }}>
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Project Milestones</h2>
          <p style={{ 
            color: '#000000', 
            fontSize: '16px', 
            marginTop: '10px',
            fontWeight: '600'
          }}>
            Tracking the development and evaluation phases of the PregAssist platform.
          </p>
        </div>

        <div className="timeline">
          {milestones.map((m, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <m.icon />
                </div>
                <div 
                  className="timeline-body p-4 rounded-4" 
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    background: '#ffffff', // Kept individual cards white so they pop against the gray section
                    border: hoveredIdx === idx 
                      ? '2px solid rgba(81, 162, 255, 0.6)' 
                      : '2px solid rgba(0, 0, 0, 0.05)',
                    transform: hoveredIdx === idx ? 'translateY(-10px)' : 'translateY(0)',
                    boxShadow: hoveredIdx === idx 
                      ? '0 15px 30px rgba(81, 162, 255, 0.25)' 
                      : '0 5px 15px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#01346d' }}>{m.date}</span>
                    <Badge bg={m.type === 'Group' ? 'info' : 'primary'} style={{ fontSize: '10px' }}>{m.type}</Badge>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#000000', marginBottom: '10px' }}>{m.title}</h4>
                  
                  {/* NEW: Assessment Details added to meet guideline requirements  */}
                  <p style={{ 
                    fontSize: '13px', 
                    color: '#444', 
                    lineHeight: '1.5',
                    marginBottom: '15px' 
                  }}>
                    {m.details}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span style={{ fontSize: '12px', color: '#000000' }}>Mark Allocation: <strong>{m.marks}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Milestones;