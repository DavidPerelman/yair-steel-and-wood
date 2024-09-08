import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import { getPost } from "@/lib/data";
import PostContainer from "@/components/postContainer/PostContainer";
import Image from "next/image";
import { Fragment } from "react";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";

const AboutPage = async () => {
  const data = await getPost("about");
  const postData = JSON.parse(JSON.stringify(data));

  return (
    <>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      {/* <div
      // className={styles.container}
      // style={{ backgroundImage: `url(${postData.images[0]})` }}
      // style={{
      //   backgroundImage: `url(${postData.images[0]})`,
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   width: "100vw",
      //   height: "100vh",
      // }}
      > */}
      {postData && (
        <>
          {/* <Image
              src={postData.images[0]}
              width={0}
              height={0}
              alt=""
              style={{ width: "100%", height: "100%" }}
            /> */}
          {/* {postData.description.map((post, i) => (
              <Fragment key={i}>
                <p key={`${i}-text`}>{post}</p>
                <br key={`${i}-br`} />
              </Fragment>
            ))} */}
        </>
      )}
      {/* </div> */}
      {/* <PostContainer data={postData} /> */}
      <FullScreenImage />
    </>
  );
};

export default AboutPage;
