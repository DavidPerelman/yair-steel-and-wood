import ImagesSlider from "../imagesSlider/ImagesSlider";
import styles from "./singleProjectPageContainer.module.css";

const SingleProjectPageContainer = ({ project }) => {
  return (
    <div class={styles.row}>
      <div class={styles.textColumn}>
        <h1>{project.title}</h1>
        <h3>{project.price} ש״ח</h3>
        <p className={styles.description}>{project.description}</p>
        <div>
          מידות -
          <br />
          אורך - {project.length} ס״מ
          <br />
          רוחב - {project.width} ס״מ
          <br />
          גובה - {project.height} ס״מ
        </div>
      </div>
      <div class={styles.imagesColumn}>
        <ImagesSlider images={project.images} />
      </div>
    </div>
  );
};

export default SingleProjectPageContainer;
