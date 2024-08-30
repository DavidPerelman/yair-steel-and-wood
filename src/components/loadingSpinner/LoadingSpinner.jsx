import styles from "./loadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
