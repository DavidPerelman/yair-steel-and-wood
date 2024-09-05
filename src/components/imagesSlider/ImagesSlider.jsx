"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import "./ImagesSlider.css";

const ImagesSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    const newIndex = currentSlide - 1;
    setCurrentSlide(newIndex < 0 ? images.length - 1 : newIndex);
    scrollToSlide(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
    scrollToSlide(newIndex);
  };

  const scrollToSlide = (index) => {
    const slideWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft = index * slideWidth;
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides" ref={carouselRef}>
        <button className="carousel-prev" onClick={handlePrevClick}>
          ❮
        </button>
        <div className="carousel-slide">
          <Image
            src={images[currentSlide].secure_url}
            width={300}
            height={200}
            alt={`Slide`}
          />

          <button className="carousel-next" onClick={handleNextClick}>
            ❯
          </button>
        </div>
      </div>

      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.secure_url}
            height={80}
            width={90}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentSlide ? "active-thumbnail" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;
