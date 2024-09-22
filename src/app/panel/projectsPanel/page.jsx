"use client";

import styles from "./projectsPanel.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { useEffect, useState } from "react";

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resProjects = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
        );
        if (!resProjects.ok)
          throw new Error(`HTTP error! status: ${resProjects.status}`);

        const data = await resProjects.json();
        if (data.projects) setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const getDivisions = async () => {
      try {
        const resDivisions = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/divisions`
        );
        if (!resDivisions.ok)
          throw new Error(`HTTP error! status: ${resDivisions.status}`);

        const data = await resDivisions.json();
        if (data.divisions) setDivisions(data.divisions);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    getProjects();
    getDivisions();
  }, []);

  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - עריכת פרויקטים"
        description="יאיר ברזל ועץ - עריכת פרויקטים"
      />
      <h1 className={styles.pageHeader}>עריכת פרויקטים</h1>
      <div className={styles.pageHeader}></div>

      {projects.length > 0 && divisions.length > 0 ? (
        <ProjectsContainer
          projects={projects}
          divisions={divisions}
          link="/panel/projectsPanel/"
        />
      ) : (
        <></>
      )}

      {/* <ProjectsContainer
        projects={projects.projects}
        divisions={divisions.divisions}
        link="/panel/projectsPanel/"
      /> */}
    </div>
  );
};

export default AdminProjectsPage;
