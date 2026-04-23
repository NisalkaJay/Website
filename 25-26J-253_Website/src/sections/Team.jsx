import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaUserCircle, FaEnvelope } from 'react-icons/fa'; // Added FaEnvelope
import { team } from '../data/content';

const Team = () => {
  return (
    <section id="team" className="section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2 style={{ color: '#000000' }}>Our Team</h2>
          <p>The dedicated researchers and supervisors behind PregAssist.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {team.map((member, idx) => (
            <Col key={idx} sm={6} lg={4} xl={3} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="team-member text-center p-4 hover-lift rounded-4 shadow-sm" style={{
                background: '#ffffff',
                border: '1px solid #eee',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="member-img mb-4 d-inline-block text-center" style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #ffff',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    ) : (
                      <div style={{ color: '#ffff', fontSize: '100px', lineHeight: '1.2' }}>
                        <FaUserCircle />
                      </div>
                    )}
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#2d3748', marginBottom: '5px' }}>{member.name}</h4>
                  <p style={{ fontSize: '14px', color: '#122037', marginBottom: '10px', fontWeight: '600' }}>{member.role}</p>
                  
                  {/* NEW: Email Display added to meet guideline requirements  */}
                  {member.email && (
                    <div style={{ marginBottom: '15px', fontSize: '12px' }}>
                      <a 
                        href={`mailto:${member.email}`} 
                        style={{ color: '#4a5568', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                      >
                        <FaEnvelope style={{ color: '#51A2FF' }} /> {member.email}
                      </a>
                    </div>
                  )}
                  
                  {/* NEW: Component/Module Badge [cite: 84] */}
                  {member.module && (
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{
                        background: 'linear-gradient(135deg, #51A2FF 0%, #00D2F2 100%)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '700',
                        display: 'inline-block'
                      }}>
                        {member.module}
                      </span>
                    </div>
                  )}
                </div>

                <div className="social-links d-flex justify-content-center gap-3 mt-auto">
                  {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#4a5568' }}><FaLinkedin size={20} /></a>}
                  {member.social.github && <a href={member.social.github} target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#4a5568' }}><FaGithub size={20} /></a>}
                  {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noreferrer" className="social-icon" style={{ color: '#4a5568' }}><FaTwitter size={20} /></a>}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;