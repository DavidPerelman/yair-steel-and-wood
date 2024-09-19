"use client";

import { FaStar } from "react-icons/fa";
import styles from "./reviewComponent.module.css";
import { useState } from "react";

const ReviewComponent = ({ reviews }) => {
  const [showItems, setShowItems] = useState(4);

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= reviews.length ? prevShowItems : prevShowItems + 4
    );
  };

  const displayedItems = reviews.slice(0, showItems).map((review, i) => (
    <div key={i}>
      <div className={styles.reviewContainer}>
        <div className={styles.header}>
          <div className={styles.top}>
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
            <p>{review.publishedData}</p>
          </div>
          <div className={styles.profile}>{review.fullname}</div>
        </div>
        <div className={styles.content}>{review.review}</div>
      </div>
    </div>
  ));

  return (
    <div className={styles.reviewComponent}>
      {displayedItems}
      {showItems < reviews.length ? (
        <button className={styles.showMoreBtn} onClick={handleShowMore}>
          <h2>טען עוד</h2>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewComponent;
