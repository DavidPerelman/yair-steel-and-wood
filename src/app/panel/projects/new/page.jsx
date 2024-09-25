"use client";

import { useEffect, useState } from "react";
import { callApiGet } from "@/lib/action";
import MultistepsForm from "@/components/multistepsForm/MultistepsForm";
import CustomHead from "@/components/customHead/CustomHead";

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
    <>
      <CustomHead
        title="יאיר ברזל ועץ - יצירת פרויקט חדש"
        description="יאיר ברזל ועץ - יצירת פרויקט חדש"
      />
      {divisions.length > 0 && materials.length > 0 && (
        <>
          <h1>יצירת פרויקט חדש</h1>
          <MultistepsForm divisions={divisions} materials={materials} />
        </>
      )}
    </>
  );
};

export default NewProjectPage;
