import { FaStar } from "react-icons/fa";
import styles from "./userRatingGraph.module.css";
import StarsRatingComponent from "../starsRatingComponent/StarsRatingComponent";

const UserRatingGraph = () => {
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
          <div>150</div>
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
          <div>63</div>
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
          <div>15</div>
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
          <div>6</div>
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
          <div>20</div>
        </div>
      </div>
    </>
  );
};

export default UserRatingGraph;
