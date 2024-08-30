import styles from "./loading.module.css";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
