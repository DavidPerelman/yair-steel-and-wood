import Image from "next/image";
// import styles from "./fullScreenImage.module.css";
import "./fullScreenImage.css";
import Link from "next/link";

const FullScreenImage = () => {
  return (
    <>
      {/* <div
        style={{
          zIndex: -1,
        }}
      >
        <Image
          className={styles.image}
          src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725387382/ve44cvyyuq7acec8six2.jpg"
          alt=""
          quality={100}
          fill
          sizes="100vw"
          objectFit="cover"
        />
        <h1
          style={{
            // paddingTop: "30vh",
            // fontFamily: "monospace",
            // fontSize: "3.5rem",
            // fontWeight: "bold",
            // textAlign: "center",
            marginTop: "-1.6rem",
            zIndex: "100",
          }}
        >
          &quot;ציטוט מעניין שמושך את העין&quot;
        </h1>
      </div> */}
      <div className="relative">
        {/* <Image
          src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725387382/ve44cvyyuq7acec8six2.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        /> */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-white">ברזל ועץ</h2>
        </div>
      </div>
    </>
  );
};

export default FullScreenImage;
