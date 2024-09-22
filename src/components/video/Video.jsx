// import BackgroundVideo from "next-video/background-video";

const Video = () => {
  return (
    // <main>
    //   <BackgroundVideo src="https://res.cloudinary.com/dflevhwgh/video/upload/v1726410070/uyqtas3vafaizjlrdbj3.mp4"></BackgroundVideo>
    // </main>
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source
          src="https://res.cloudinary.com/dflevhwgh/video/upload/v1726410070/uyqtas3vafaizjlrdbj3.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
