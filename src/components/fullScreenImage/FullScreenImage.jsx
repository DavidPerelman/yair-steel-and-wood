import Image from "next/image";
import "./fullScreenImage.css";

const FullScreenImage = () => {
  return (
    <Image
      src="/IMG_1912.png"
      alt=""
      quality={100}
      fill
      sizes="100vw"
      objectFit="cover"
    />
  );
};

export default FullScreenImage;
