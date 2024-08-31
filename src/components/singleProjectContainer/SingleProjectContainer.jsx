import styles from "./singleProjectContainer.module.css";

const SingleProjectContainer = () => {
  return (
    <div
      id={styles.homeContentContainer}
      className={styles.homeContentContainer}
    >
      <div className={styles.leftCol}>
        <div className={`${styles.buyPanel} ${styles.panel}`}></div>
      </div>
      <div className={styles.rightCol}>
        <div className={`${styles.buyPanel} ${styles.panel}`}></div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;
