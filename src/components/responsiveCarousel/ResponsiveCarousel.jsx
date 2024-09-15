"use client";
import { useState, useEffect } from "react";
import styles from "./responsiveCarousel.module.css";
import Image from "next/image";

const Carousel = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    // let interval = setInterval(() => {
    //   if (!pause) {
    //     handleNext();
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 3000);
    // return () => clearInterval(interval);
  });

  return (
    <div className={styles.App}>
      <div
        className={styles.slide}
        // onMouseEnter={handleMouse}
        // onMouseLeave={handleMouse}
      >
        {content.map((item, index) => (
          <div
            className={
              counter - 1 === index ? `${styles.show}` : `${styles.notShow}`
            }
            key={index}
          >
            {item}
          </div>
        ))}

        <button className={styles.next} onClick={handleNext}>
          &#10094;
        </button>
        <button className={styles.prev} onClick={handlePre}>
          &#10095;
        </button>
      </div>

      <div className={styles.page}>
        {content.map((item, index) => (
          <Image
            className={
              counter - 1 === index
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
            key={index}
            onClick={() => handlePage(index + 1)}
            src={content[index].props.src}
            alt={content[index].props.alt}
            width={85}
            height={85}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
