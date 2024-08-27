// import BackgroundVideo from "next-video/background-video";
import styles from "./video.module.css";

const Video = () => {
  return (
    <main>
      <video
        src={require("../../../public/video.mp4")}
        autoPlay
        muted
        loop
        className={styles.container}
      />
      {/* <BackgroundVideo src="https://vod.api.video/vod/vi67FW5vvj367CiuS5EwK1zd/mp4/source.mp4"></BackgroundVideo> */}
    </main>
  );
};

export default Video;
