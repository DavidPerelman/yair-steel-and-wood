import Image from "next/image";
import "./fullScreenImage.css";

const FullScreenImage = () => {
  return (
    <Image
      src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725387382/ve44cvyyuq7acec8six2.jpg"
      alt=""
      quality={100}
      fill
      sizes="100vw"
      objectFit="cover"
    />
  );
};

export default FullScreenImage;
