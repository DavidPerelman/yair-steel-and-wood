import Image from "next/image";
import styles from "./singleProjectPage.module.css";

const SingleProjectPage = () => {
  return (
    <div className={styles.singleProjectPage}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724870263/o19tuepnhfayumdbfs8q.jpg"
            fill
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image
              src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724870263/o19tuepnhfayumdbfs8q.jpg"
              fill
              alt=""
              className={styles.img}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>David Perelman</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            exercitationem unde non odit, architecto fugiat quae dolores
            voluptate a voluptates impedit nam eum alias optio numquam, magnam
            error, eligendi assumenda!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
