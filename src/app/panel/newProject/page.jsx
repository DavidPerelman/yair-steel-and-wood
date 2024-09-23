"use client";

import { useEffect, useState } from "react";
import styles from "./newProject.module.css";
import MultistepsForm from "@/components/multistepsForm/MultistepsForm";
import { callApiGet } from "@/lib/action";

const NewProjectPage = () => {
  const [materials, setMaterials] = useState([]);
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/materials`
        );
        if (data.materials) setMaterials(data.materials);
      } catch (error) {
        console.error("Error fetching materials:", error);
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

    getMaterials();
    getDivisions();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.NewProjectPage}>
        {divisions && materials && (
          <MultistepsForm divisions={divisions} materials={materials} />
        )}
      </div>
    </div>
  );
};

export default NewProjectPage;
