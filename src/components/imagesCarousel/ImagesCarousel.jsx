"use client";

import { useState } from "react";
import styles from "./imagesCarousel.module.css";
import Image from "next/image";

const ImagesCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexSlide, setIndexSlide] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setIndexSlide(slideIndex);
  };

  return (
    <div className={styles.content}>
      <div className={styles.topCol}>
        <div className={styles.leftArrow} onClick={goToNext}>
          &#10094;
        </div>
        {/* <button className={styles.leftArrow} onClick={goToNext}>
          ❰
        </button> */}
        <Image
          src={slides[currentIndex]}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div className={styles.rightArrow} onClick={goToPrevious}>
          &#10095;
        </div>
      </div>
      <div className={styles.bottomCol}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            {slideIndex === currentIndex ? (
              <div className={styles.dotArrowStyles}></div>
            ) : (
              <></>
            )}

            <Image
              src={slides[slideIndex]}
              alt=""
              height={80}
              width={80}
              className={styles.dots}
              onClick={() => goToSlide(slideIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCarousel;
