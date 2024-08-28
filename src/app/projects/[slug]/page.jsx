import Image from "next/image";
import styles from "./singleProjectPage.module.css";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SingleProjectPage = async ({ params }) => {
  const { slug } = params;

  const project = await getData(slug);

  return (
    <div className={styles.singleProjectPage}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724870263/o19tuepnhfayumdbfs8q.jpg"
            fill
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.detail}>
            <Image
              src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724870263/o19tuepnhfayumdbfs8q.jpg"
              alt=""
              className={styles.avatar}
              width={50}
              height={50}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>David Perelman</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>{project.body}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
