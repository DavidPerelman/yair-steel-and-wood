import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.css";
import { getProjects } from "@/lib/data";
import CustomHead from "@/components/customHead/CustomHead";
import Image from "next/image";

const ProjectsPage = async () => {
  const projects = await getProjects();
  // const projects = [{}];

  return (
    <div className={styles.projectsPage}>
      <CustomHead
        title="יאיר ברזל ועץ - פרויקטים"
        description="יאיר ברזל ועץ - פרויקטים"
      />
      <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
      <div className={styles.boxContainer}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.box}>
            <div className={styles.boxImgContainer}>
              <Image
                src={project.thumbnail}
                alt=""
                fill
                className={styles.boxImg}
              />
            </div>
            <h1>כותרת לדוגמא</h1>
          </div>
          // <div className={styles.project} key={project.slug}>
          //   <ProjectCard project={project} />
          // </div>
        ))}
        {projects.map((project) => (
          <div key={project.slug} className={styles.box}>
            <div className={styles.boxImgContainer}>
              <Image
                src="https://instagram.fsdv4-1.fna.fbcdn.net/v/t51.29350-15/419497345_1414697996071388_2563860094740414821_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsdv4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=pDu7WiLPrs8Q7kNvgEDyeTA&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzI4MzU0OTQ5MTQxMTc3NzI3OA%3D%3D.2-ccb7-5&oh=00_AYCZH73dyOqfa5RGmbAJxNK8-d6XsA5pCiIqKbboZHbztQ&oe=66D68F90&_nc_sid=8f1549"
                alt=""
                className={styles.boxImg}
                fill
              />
            </div>
            <h1>כותרת לדוגמא</h1>
          </div>
          // <div className={styles.project} key={project.slug}>
          //   <ProjectCard project={project} />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
