import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { techLogos } from '../data/content'; 

// Import Swiper styles
import 'swiper/css';

const TechSlider = () => {
  return (
    <section id="tech-slider" style={{ background: '#000000', padding: '50px 0', overflow: 'hidden' }}>
      <Container fluid>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          slidesPerView={2}
          loop={true}
          speed={1750} // Increased to 8000 for a much slower, smoother glide
          allowTouchMove={false} 
          autoplay={{
            delay: 0, 
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="tech-swiper-smooth"
        >
          {techLogos.map((tech, idx) => (
            <SwiperSlide key={idx} className="d-flex flex-column align-items-center justify-content-center">
              <div className="tech-icon-wrapper">
                <tech.icon size={55} className="tech-icon" style={{ color: tech.color }} />
              </div>
              <span className="mt-3" style={{ fontSize: '11px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '700' }}>
                {tech.name}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TechSlider;