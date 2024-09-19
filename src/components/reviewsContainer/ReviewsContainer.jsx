"use client";

import { useState } from "react";
import styles from "./reviewsContainer.module.css";
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewComponent from "../reviewComponent/ReviewComponent";
import UserRating from "../userRatingGraph/UserRatingGraph";
import UserRatingAverage from "../userRatingAverage/UserRatingAverage";
import UserRatingGraph from "../userRatingGraph/UserRatingGraph";

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState([
    {
      fullname: "יעל",
      email: "dperelman3@gmail.com",
      rating: 5,
      review:
        "פרגולה מדהימה מעשה ידי האמן יאיר! השירות שלו מעל ומעבר, והתוצאה מדברת בעד עצמה. ממליצה בחום!",
    },
    {
      fullname: "רחל",
      email: "yair@gmail.com",
      rating: 4,
      review:
        "יאיר איש מקצוע מדהים! הזמנתי ממנו פרגולה והתוצאה מעבר לכל ציפייה. השירות שלו אדיב, זמין ומקצועי, והוא תמיד עומד בזמנים. ממליצה בחום!",
    },
    {
      fullname: "משה",
      email: "yair@gmail.com",
      rating: 5,
      review:
        "עץ וברזל שהזמנתי מיאיר היא יצירת מופת! איכות הבנייה והעיצוב פשוט מושלמים. היא הוסיפה המון לחצר שלנו. תודה יאיר!",
    },
  ]);
  const [review, setReview] = useState({});
  const [updateReviews, setUpdateReviews] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  function toggleReviewForm() {
    setShowReviewForm(!showReviewForm);
    setReview({});
  }

  return (
    <div className={styles.reviewsContainer}>
      <h1 className={styles.pageHeader}>ביקורת לקוחות</h1>

      <div className={styles.top}>
        <div className={styles.userRatingAverage}>
          <UserRatingAverage />
        </div>

        <div className={styles.userRatingGraph}>
          <UserRatingGraph />
        </div>

        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={toggleReviewForm}>
            {showReviewForm ? "ביטול" : "כתוב ביקורת"}
          </button>
        </div>
      </div>

      {showReviewForm ? (
        <div className={styles.reviewComponent}>
          <ReviewForm toggleReviewForm={toggleReviewForm} />
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
