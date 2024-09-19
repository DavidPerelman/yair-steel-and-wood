import { useEffect, useState } from "react";
import styles from "./userRatingAverage.module.css";
import { FaStar } from "react-icons/fa";

const UserRatingAverage = ({ totalRatings, starsRatings }) => {
  const [ratingAverage, setRatingAverage] = useState();

  useEffect(() => {
    const average =
      (5 * starsRatings.fiveStars +
        4 * starsRatings.fourStars +
        3 * starsRatings.threeStars +
        2 * starsRatings.twoStars +
        1 * starsRatings.oneStars) /
      (starsRatings.fiveStars +
        starsRatings.fourStars +
        starsRatings.threeStars +
        starsRatings.twoStars +
        starsRatings.oneStars);

    function isDecimal(num) {
      return num % 1 !== 0;
    }

    if (isDecimal(average)) {
      setRatingAverage(average.toFixed(2));
    } else {
      setRatingAverage(average);
    }
  }, []);

  return (
    <div>
      <div className={styles.top}>
        <p className={styles.heading}>{ratingAverage} מתוך 5</p>
        <div>
          {[...Array(5)].map((star, i) => (
            <FaStar
              key={i}
              className={styles.star}
              size={20}
              color={i + 1 <= ratingAverage ? "#ffc107" : "#e4e5e9"}
            />
          ))}
        </div>
      </div>
      <p>מבוסס על {totalRatings} ביקורות</p>
      <hr style={{ border: "3px solid #f1f1f1" }} />
    </div>
  );
};

export default UserRatingAverage;
