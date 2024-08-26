import BackgroundVideo from "next-video/background-video";
import styles from "./video.module.css";

const Video = () => {
  return (
    <main>
      <BackgroundVideo src="https://videos.pexels.com/video-files/8841382/8841382-uhd_2732_1440_30fps.mp4"></BackgroundVideo>
    </main>
  );
};

export default Video;
