import { FaStar } from "react-icons/fa";
import styles from "./reviewComponent.module.css";

const ReviewComponent = ({ reviews }) => {
  return (
    <div className={styles.reviewComponent}>
      {reviews.map((review, i) => (
        <div key={i}>
          <div className={styles.reviewContainer}>
            <div className={styles.header}>
              <div className={styles.rating}>
                {[...Array(review.rating)].map((star, i) => (
                  <FaStar
                    key={i}
                    className={styles.star}
                    size={20}
                    color="#ffc107"
                  />
                ))}
              </div>
              <div className={styles.profile}>{review.fullname}</div>
            </div>
            <div className={styles.content}>{review.review}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;
