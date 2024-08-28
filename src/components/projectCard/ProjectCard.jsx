import Image from "next/image";
import styles from "./projectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ project }) => {
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
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.desc}>{project.body}</p>
        <Link className={styles.link} href={`/projects/${project.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
