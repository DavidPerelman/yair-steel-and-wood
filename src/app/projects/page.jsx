"use client";

import styles from "./projects.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { callApiGet } from "@/lib/action";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
        );
        if (data.projects) setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const getDivisions = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/divisions`
        );
        if (data.divisions) setDivisions(data.divisions);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    getProjects();
    getDivisions();
  }, []);

  return (
    <div className={styles.projectsPage}>
      <CustomHead
        title="יאיר ברזל ועץ - חנות"
        description="יאיר ברזל ועץ - חנות"
      />
      {projects.length > 0 && divisions.length > 0 ? (
        <ProjectsContainer
          projects={projects}
          divisions={divisions}
          link="/projects/"
        />
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
