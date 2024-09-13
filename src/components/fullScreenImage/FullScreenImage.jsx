import Image from "next/image";
import styles from "./fullScreenImage.module.css";
import "./fullScreenImage.css";
import Link from "next/link";

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
      {/* <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-white">ברזל ועץ</h2>
        </div>
      </div> */}
      <div></div>
    </>
  );
};

export default FullScreenImage;
