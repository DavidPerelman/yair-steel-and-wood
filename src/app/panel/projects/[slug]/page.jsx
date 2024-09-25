"use client";

import "./singleProjectPage.css";
import CustomHead from "@/components/customHead/CustomHead";
import SingleProjectPageContainer from "@/components/singleProjectPageContainer/SingleProjectPageContainer";
import { callApiGet } from "@/lib/action";
import { useEffect, useState } from "react";

const SingleProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);
  const { slug } = params;

  useEffect(() => {
    const getProject = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`
        );

        const project = data.project;

        if (!project) {
          console.log("Project not found");
          // Handle the case where the project is not found
        } else {
          setProject(project);
          // Use the project data here
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        // Handle the error (e.g., show an error message to the user)
      }
    };

    getProject();
  }, [slug]);

  return (
    <>
      {project && (
        <CustomHead
          title={`יאיר ברזל ועץ - ${project.title}`}
          description={`יאיר ברזל ועץ - ${project.title}`}
        />
      )}
      {project && <SingleProjectPageContainer project={project} />}
    </>
  );
};

export default SingleProjectPage;
