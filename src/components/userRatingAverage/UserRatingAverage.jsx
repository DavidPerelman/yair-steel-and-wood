"use client";

import { useEffect, useState } from "react";
import styles from "./userRatingAverage.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const UserRatingAverage = ({ totalRatings, starsRatings }) => {
  const [ratingAverage, setRatingAverage] = useState(0);

  function isDecimal(num) {
    return num % 1 !== 0;
  }

  useEffect(() => {
    const totalStars =
      starsRatings.fiveStars +
      starsRatings.fourStars +
      starsRatings.threeStars +
      starsRatings.twoStars +
      starsRatings.oneStars;

    if (totalStars === 0) {
      setRatingAverage(0); // Set to 0 if no ratings are available
      return;
    }

    const average =
      (5 * starsRatings.fiveStars +
        4 * starsRatings.fourStars +
        3 * starsRatings.threeStars +
        2 * starsRatings.twoStars +
        1 * starsRatings.oneStars) /
      totalStars;

    if (isDecimal(average)) {
      setRatingAverage(average.toFixed(2));
    } else {
      setRatingAverage(average);
    }
  }, [starsRatings]);

  return (
    <div>
      <div className={styles.top}>
        <p className={styles.heading}>{ratingAverage} מתוך 5</p>
        <div className={styles.starsRatings}>
          {[...Array(5)].map((star, i) => {
            if (isDecimal(ratingAverage)) {
              if (i + 1 <= ratingAverage) {
                return (
                  <FaStar
                    key={i}
                    className={styles.star}
                    size={20}
                    color="#ffc107"
                  />
                );
              } else {
                if (i < ratingAverage) {
                  return (
                    <FaStarHalfAlt
                      key={i}
                      className={styles.star}
                      size={20}
                      color="#ffc107"
                    />
                  );
                } else {
                  return (
                    <FaRegStar
                      key={i}
                      className={styles.star}
                      size={20}
                      color="#ffc107"
                    />
                  );
                }
              }
            } else {
              if (i + 1 <= ratingAverage) {
                return (
                  <FaStar
                    key={i}
                    className={styles.star}
                    size={20}
                    color="#ffc107"
                  />
                );
              } else {
                return (
                  <FaRegStar
                    key={i}
                    className={styles.star}
                    size={20}
                    color="#ffc107"
                  />
                );
              }
            }
          })}
        </div>
      </div>
      <p>מבוסס על {totalRatings} ביקורות</p>
      <hr style={{ border: "3px solid #f1f1f1" }} />
    </div>
  );
};

export default UserRatingAverage;
