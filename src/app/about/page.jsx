import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import { getPost } from "@/lib/data";
import PostContainer from "@/components/postContainer/PostContainer";
import Image from "next/image";

const AboutPage = async () => {
  const data = await getPost("about");
  const postData = JSON.parse(JSON.stringify(data));

  return (
    <>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      <div className={styles.container}>
        {postData && (
          <Image
            src={postData.images[0]}
            width={0}
            height={0}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      {/* <PostContainer data={postData} /> */}
    </>
  );
};

export default AboutPage;
