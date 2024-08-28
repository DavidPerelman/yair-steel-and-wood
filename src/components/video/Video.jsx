import BackgroundVideo from "next-video/background-video";
import styles from "./video.module.css";

const Video = () => {
  return (
    <main>
      {/* <video
        src={require("https://videos.pexels.com/video-files/27591301/12177940_2560_1440_60fps.mp4")}
        autoPlay
        muted
        loop
        className={styles.container}
      /> */}
      <BackgroundVideo src="https://res.cloudinary.com/dyzl8mvwt/video/upload/v1724840260/er8y0ugumauuaexgcfii.mp4"></BackgroundVideo>
    </main>
  );
};

export default Video;
