"use client";

import styles from "./singleProjectContainer.module.css";
import ImagesCarousel from "../imagesCarousel/ImagesCarousel";
import Link from "next/link";

const SingleProjectContainer = ({ project }) => {
  console.log(project);

  return (
    <div className={styles.content}>
      <div className={styles.leftCol}>
        <div className={`${styles.leftPanel} ${styles.panel}`}>
          <h1>{project.title}</h1>
          <h3>מחיר - {project.price} ש״ח</h3>

          <p className={styles.material_div}>
            מחלקה -&nbsp;
            {project.division &&
              project.division.map((item) => (
                <Link class={styles.links} href={`/divisions/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
          </p>

          <p className={styles.material_div}>
            חומר -&nbsp;
            {project.material &&
              project.material.map((item) => (
                <Link class={styles.links} href={`/materials/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
          </p>

          {/* <div className={styles.material_div}>
            חומר -&nbsp;
            {project.material.map((item) => (
              <Link
                key={item.slug}
                href={`/materials/${item.slug}`}
                className={styles.links}
              >
                <h4>{item.title}</h4>
              </Link>
            ))}
          </div> */}
          <p>{project.description}</p>
          <div>
            מידות -
            <br />
            אורך - {project.size.length} ס״מ
            <br />
            רוחב - {project.size.width} ס״מ
            <br />
            גובה - {project.size.heigth} ס״מ
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={`${styles.rightPanel} ${styles.panel}`}>
          <ImagesCarousel slides={project.images} />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;
