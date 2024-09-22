import styles from "./projectDetails.module.css";

const ProjectDetails = ({ project }) => {
  return (
    <div className={styles.textColumn}>
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
  );
};

export default ProjectDetails;
