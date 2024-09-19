import { FaStar } from "react-icons/fa";
import styles from "./starsRatingComponent.module.css";

const StarsRatingComponent = ({ starLength }) => {
  return (
    <div className={styles.rating}>
      {[...Array(starLength)].map((star, i) => (
        <FaStar key={i} className={styles.star} size={20} color="#ffc107" />
      ))}
    </div>
  );
};

export default StarsRatingComponent;
