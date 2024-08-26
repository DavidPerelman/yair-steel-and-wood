import styles from "./video.module.css";
// import videoBg from "../../../assets/radiohead-hebrew-medley.mp4";

const Video = () => {
  return (
    <main>
      <video
        src={require("../../../public/dream-aquarium.mp4")}
        autoPlay
        loop
        muted
        className={styles.container}
      />
    </main>
  );
};

export default Video;
