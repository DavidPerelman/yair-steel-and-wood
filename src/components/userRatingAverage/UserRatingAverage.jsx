import styles from "./userRatingAverage.module.css";
import { FaStar } from "react-icons/fa";

const UserRatingAverage = () => {
  return (
    <div>
      <div className={styles.top}>
        <p className={styles.heading}>4.1 מתוך 5</p>
        <div>
          <FaStar className={styles.star} size={30} color={"#ffc107"} />
          <FaStar className={styles.star} size={30} color={"#ffc107"} />
          <FaStar className={styles.star} size={30} color={"#ffc107"} />
          <FaStar className={styles.star} size={30} color={"#ffc107"} />
          <FaStar className={styles.star} size={30} color={"#ffc107"} />
        </div>
      </div>
      <p>מבוסס על 254 ביקורות</p>
      <hr style={{ border: "3px solid #f1f1f1" }} />
    </div>
  );
};

export default UserRatingAverage;
