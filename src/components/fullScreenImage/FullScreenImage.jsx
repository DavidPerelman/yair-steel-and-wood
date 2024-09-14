import Image from "next/image";
import styles from "./fullScreenImage.module.css";
// import "./fullScreenImage.css";

const FullScreenImage = () => {
  return (
    <>
      <div className={styles.fullScreenImageContainer}>
        <div className={styles.row}>
          <div className={styles.banner}>
            <Image
              src={
                "https://res.cloudinary.com/dflevhwgh/image/upload/v1725387382/ve44cvyyuq7acec8six2.jpg"
              }
              alt=""
              width={0}
              height={0}
              className={styles.image}
            />
            <h1 className={styles.heading}>ברזל ועץ</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenImage;
