import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import { getPost } from "@/lib/data";
import { Fragment } from "react";
import PostContainer from "@/components/PostContainer/PostContainer";

const AboutPage = async () => {
  const data = await getPost("about");
  const postData = JSON.parse(JSON.stringify(data));

  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      <PostContainer data={postData} />
    </div>
  );
};

export default AboutPage;
