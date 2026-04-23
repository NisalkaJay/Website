import React from 'react';
import { Container } from 'react-bootstrap';

const CTABanner = () => {
  return (
    <section id="cta" style={{
      background: 'linear-gradient( #3c505e , #06232db3), url("https://plus.unsplash.com/premium_photo-1661606358869-6adbae2d792c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRlY2glMjByZWxhdGVkJTIwcHJlZ25hbmN5fGVufDB8MHwwfHx8MA%3D%3D")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: '100px 0',
      textAlign: 'center',
      borderTop: '1px solid var(--accent-violet)',
      borderBottom: '1px solid var(--accent-violet)'
    }}>
      <Container data-aos="zoom-in">
        <h2 style={{ 
          fontFamily: 'var(--font-hero)', 
          fontSize: '48px', 
          fontWeight: '800', 
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          PregAssist
        </h2>
        <p style={{ 
          fontSize: '20px', 
          color: '#FFff', 
          maxWidth: '700px', 
          margin: '20px auto 0',
          fontStyle: 'italic'
        }}>
          "Intelligent support for mothers & clinicians"
        </p>
      </Container>
    </section>
  );
};

export default CTABanner;
