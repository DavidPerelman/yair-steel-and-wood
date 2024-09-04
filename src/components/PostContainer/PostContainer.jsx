"use client";

// import { Fragment } from "react";
import styles from "./postContainer.module.css";
// import Image from "next/image";

const PostContainer = ({ data }) => {
  return (
    <div className={styles.content}>
      {/* <div className={styles.leftCol}>
        <div className={`${styles.leftPanel} ${styles.panel}`}>
          <h1>{data.title}</h1>
          {data.description.map((post, i) => (
            <Fragment key={i}>
              <p key={`${i}-text`}>{post}</p>
              <br key={`${i}-br`} />
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={`${styles.rightPanel} ${styles.panel}`}>
          <Image
            src={data.images[0]}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default PostContainer;
