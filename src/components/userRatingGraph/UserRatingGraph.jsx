"use client";

import styles from "./userRatingGraph.module.css";
import StarsRatingComponent from "../starsRatingComponent/StarsRatingComponent";
import { useEffect } from "react";

const UserRatingGraph = ({ totalRatings, starsRatings }) => {
  useEffect(() => {
    const bar5div = document.querySelector(`.${styles.bar5}`);
    const bar4div = document.querySelector(`.${styles.bar4}`);
    const bar3div = document.querySelector(`.${styles.bar3}`);
    const bar2div = document.querySelector(`.${styles.bar2}`);
    const bar1div = document.querySelector(`.${styles.bar1}`);

    const fiveStarsPrecents = (starsRatings.fiveStars / totalRatings) * 100;
    const fourStarsPrecents = (starsRatings.fourStars / totalRatings) * 100;
    const threeStarsPrecents = (starsRatings.threeStars / totalRatings) * 100;
    const twoStarsPrecents = (starsRatings.twoStars / totalRatings) * 100;
    const oneStarsPrecents = (starsRatings.oneStars / totalRatings) * 100;

    bar5div.style.width = `${fiveStarsPrecents}%`;
    bar4div.style.width = `${fourStarsPrecents}%`;
    bar3div.style.width = `${threeStarsPrecents}%`;
    bar2div.style.width = `${twoStarsPrecents}%`;
    bar1div.style.width = `${oneStarsPrecents}%`;
  }, []);

  return (
    <>
      <div className={styles.ratingDiv}>
        <div className={styles.sideLeft}>
          <StarsRatingComponent starLength={5} />
        </div>
        <div className={styles.middle}>
          <div className={styles.barContainer}>
            <div className={styles.bar5}></div>
          </div>
        </div>
        <div className={styles.sideRight}>
          <div>{starsRatings.fiveStars}</div>
        </div>
      </div>

      <div className={styles.ratingDiv}>
        <div className={styles.sideLeft}>
          <StarsRatingComponent starLength={4} />
        </div>
        <div className={styles.middle}>
          <div className={styles.barContainer}>
            <div className={styles.bar4}></div>
          </div>
        </div>
        <div className={styles.sideRight}>
          <div>{starsRatings.fourStars}</div>
        </div>
      </div>

      <div className={styles.ratingDiv}>
        <div className={styles.sideLeft}>
          <StarsRatingComponent starLength={3} />
        </div>
        <div className={styles.middle}>
          <div className={styles.barContainer}>
            <div className={styles.bar3}></div>
          </div>
        </div>
        <div className={styles.sideRight}>
          <div>{starsRatings.threeStars}</div>
        </div>
      </div>

      <div className={styles.ratingDiv}>
        <div className={styles.sideLeft}>
          <StarsRatingComponent starLength={2} />
        </div>
        <div className={styles.middle}>
          <div className={styles.barContainer}>
            <div className={styles.bar2}></div>
          </div>
        </div>
        <div className={styles.sideRight}>
          <div>{starsRatings.twoStars}</div>
        </div>
      </div>

      <div className={styles.ratingDiv}>
        <div className={styles.sideLeft}>
          <StarsRatingComponent starLength={1} />
        </div>
        <div className={styles.middle}>
          <div className={styles.barContainer}>
            <div className={styles.bar1}></div>
          </div>
        </div>
        <div className={styles.sideRight}>
          <div>{starsRatings.oneStars}</div>
        </div>
      </div>
    </>
  );
};

export default UserRatingGraph;
