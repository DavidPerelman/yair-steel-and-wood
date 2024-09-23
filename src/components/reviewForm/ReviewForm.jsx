"use client";

import { useFormState } from "react-dom";
import styles from "./reviewForm.module.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { getDate } from "@/lib/utils";
import { callApiPost } from "@/lib/action";

const ReviewForm = ({ setReview, setShowReviewForm, setReviews }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const formRef = useRef();

  const reviewFormHandleSubmit = async (previousState, formData) => {
    const { fullname, email, rating, review } = Object.fromEntries(formData);

    const publishedDate = getDate();

    try {
      const reviewData = {
        fullname,
        email,
        rating,
        review,
        publishedDate,
      };

      if (reviewData.rating === "") {
        alert("נא לתת דירוג!");
      } else {
        const newReview = await callApiPost(
          `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`,
          reviewData
        );
        setShowReviewForm(false);

        setReviews((oldArray) => [...oldArray, newReview.newReview]);

        return newReview;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [state, formAction] = useFormState(reviewFormHandleSubmit, undefined);

  useEffect(() => {
    const clearForm = () => {
      setReview({});
      setRating(null);
      setHover(null);
      formRef.current.reset();
    };

    clearForm();
  }, [state, setReview]);

  return (
    <form ref={formRef} action={formAction} className={styles.reviewForm}>
      <div className={styles.rating}>
        <input type="number" name="rating" id="" hidden />
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index} onClick={() => setRating(currentRating)}>
              <input
                className={styles.starInput}
                type="radio"
                name="rating"
                value={parseInt(currentRating)}
              />
              <FaStar
                className={styles.star}
                size={50}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div>
        <label className={styles.label} htmlFor="fullname">
          שם מלא:
        </label>
        <input className={styles.input} type="text" name="fullname" required />
        <label className={styles.label} htmlFor="email">
          אימייל (לא יוצג באתר):
        </label>
        <input className={styles.input} type="text" name="email" required />
        <label className={styles.label} htmlFor="review">
          תגובה:
        </label>
        <textarea
          className={styles.input}
          name="review"
          id=""
          cols={30}
          rows={5}
          required
        ></textarea>
      </div>
      <button className={styles.button}>שלח</button>
    </form>
  );
};

export default ReviewForm;
