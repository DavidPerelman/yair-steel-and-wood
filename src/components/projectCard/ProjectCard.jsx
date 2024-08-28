import Image from "next/image";
import styles from "./projectCard.module.css";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://res.cloudinary.com/dyzl8mvwt/image/upload/v1724870263/o19tuepnhfayumdbfs8q.jpg"
            fill
            alt=""
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Project Example</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="/projects/project">READ MORE</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
