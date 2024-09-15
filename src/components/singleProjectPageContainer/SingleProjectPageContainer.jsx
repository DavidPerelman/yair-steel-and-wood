import styles from "./singleProjectPageContainer.module.css";
import ProjectDetails from "../projectDetails/ProjectDetails";
import ResponsiveCarousel from "../responsiveCarousel/ResponsiveCarousel";
import Image from "next/image";

const SingleProjectPageContainer = ({ project }) => {
  const item = project.images.map((image, index) => (
    <Image
      className={styles.image}
      key={index}
      src={image.secure_url}
      height={300}
      width={300}
      alt={image.public_id}
      unoptimized
    />
  ));
  return (
    <div className={styles.row}>
      <div className={styles.right_column}>
        <ProjectDetails project={project} />
      </div>
      <div className={styles.left_column}>
        <ResponsiveCarousel>{item}</ResponsiveCarousel>
      </div>
    </div>
  );
};

export default SingleProjectPageContainer;
