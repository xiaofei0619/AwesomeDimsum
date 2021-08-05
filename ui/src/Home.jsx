import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  const carouselStyle = {
    maxWidth: '100%',
  };
  const carouselImgStyle = {
    width: '100%',
    height: '710px',
  };

  return (
    <Carousel fade>
      <Carousel.Item style={carouselStyle}>
        <img
          className="CarouselImg"
          src="/image/home1.jpeg"
          alt="FirstSlide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
          <h3>Soft Opening</h3>
          <p>15% Off For Online Order Over $60 Before Tax!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselStyle}>
        <img
          className="CarouselImg"
          src="/image/home2.jpeg"
          alt="SecondSlide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
          <h3>Traditional Handmade Dimsum</h3>
          <p>We Have the Most Experienced Dimsum Chefs from China</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselStyle}>
        <img
          className="CarouselImg"
          src="/image/home3.jpeg"
          alt="ThirdSlide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
          <h3>Yum Cha 飲 茶</h3>
          <p>
            Yum cha also known as going for dim sum, is the Cantonese tradition of brunch \
            involving Chinese tea and dim sum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
