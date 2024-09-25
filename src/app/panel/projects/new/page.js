"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./createProject.module.css";
import NewPageForm from "@/components/newPageForm/NewPageForm";
import { callApiGet } from "@/lib/action";
import MultistepsForm from "@/components/multistepsForm/MultistepsForm";

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
    <div className={styles.formContainer}>
      <h1>יצירת פרויקט חדש</h1>
      <div className={styles.container}>
        <div className={styles.NewProjectPage}>
          {divisions && materials && (
            <MultistepsForm divisions={divisions} materials={materials} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProjectPage;
