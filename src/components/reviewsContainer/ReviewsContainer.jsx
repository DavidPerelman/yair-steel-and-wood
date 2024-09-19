"use client";

import { useEffect, useState } from "react";
import styles from "./reviewsContainer.module.css";
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewComponent from "../reviewComponent/ReviewComponent";
import UserRatingAverage from "../userRatingAverage/UserRatingAverage";
import UserRatingGraph from "../userRatingGraph/UserRatingGraph";

const ReviewsContainer = ({ reviewsData }) => {
  const [reviews, setReviews] = useState(reviewsData);
  const [review, setReview] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [starsRatings, setStarsRatings] = useState({
    oneStars: 0,
    twoStars: 0,
    threeStars: 0,
    fourStars: 0,
    fiveStars: 0,
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

  function toggleReviewForm() {
    setShowReviewForm(!showReviewForm);
    setReview({});
  }

  useEffect(() => {
    // Loop through the reviews array and count each rating
    const ratingsCount = reviews.reduce(
      (acc, review) => {
        switch (review.rating) {
          case 1:
            acc.oneStars += 1;
            break;
          case 2:
            acc.twoStars += 1;
            break;
          case 3:
            acc.threeStars += 1;
            break;
          case 4:
            acc.fourStars += 1;
            break;
          case 5:
            acc.fiveStars += 1;
            break;
          default:
            break;
        }
        return acc;
      },
      { oneStars: 0, twoStars: 0, threeStars: 0, fourStars: 0, fiveStars: 0 }
    );

    // Set the state with the updated ratings
    setStarsRatings(ratingsCount);
    setTotalRatings(reviews.length);
  }, []);

  return (
    <div className={styles.reviewsContainer}>
      <h1 className={styles.pageHeader}>ביקורת לקוחות</h1>

      <div className={styles.top}>
        <div className={styles.userRatingAverage}>
          <UserRatingAverage
            totalRatings={totalRatings}
            starsRatings={starsRatings}
          />
        </div>

        <div className={styles.userRatingGraph}>
          <UserRatingGraph
            totalRatings={totalRatings}
            starsRatings={starsRatings}
          />
        </div>

        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={toggleReviewForm}>
            {showReviewForm ? "ביטול" : "כתוב ביקורת"}
          </button>
        </div>
      </div>

      {showReviewForm ? (
        <div className={styles.reviewComponent}>
          <ReviewForm
            setReview={setReview}
            setShowReviewForm={setShowReviewForm}
            showReviewForm={showReviewForm}
            setReviews={setReviews}
          />
        </div>
      ) : (
        <></>
      )}

      {reviews.length > 0 && (
        <>
          <ReviewComponent reviews={reviews} />
        </>
      )}
    </div>
  );
};

export default ReviewsContainer;
