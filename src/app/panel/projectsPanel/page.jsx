// "use client";

import styles from "./projects.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
import CustomHead from "@/components/customHead/CustomHead";
import logout from "@/lib/actions/logout";
import Link from "next/link";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getProjects } from "@/lib/data";
import ProjectCard from "@/components/projectCard/ProjectCard";

const AdminProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - עריכת פרויקטים"
        description="יאיר ברזל ועץ - עריכת פרויקטים"
      />
      <h1 className={styles.pageHeader}>עריכת פרויקטים</h1>
      <div className={styles.pageHeader}></div>
      <ProjectsContainer projects={projects} link="/panel/projectsPanel/" />
    </div>
  );
};

export default AdminProjectsPage;
