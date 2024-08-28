import Image from "next/image";
import styles from "./projectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={project.thumbnail} fill alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.desc}>{project.body}</p>
        <Link className={styles.link} href={`/projects/${project.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
