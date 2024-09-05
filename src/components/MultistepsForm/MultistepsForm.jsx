import FormWrapper from "../formWrapper/FormWrapper";
import styles from "./multistepsForm.module.css";
import { fetchData, getDivisions, getMaterials, getUsers } from "@/lib/data";

const MultistepsForm = async () => {
  // const divisions = await getDivisions();
  // const divisionsData = JSON.parse(JSON.stringify(divisions));
  // const materials = await getMaterials();
  // const materialsData = JSON.parse(JSON.stringify(materials));

  const materialsData = [];
  const divisionsData = [];

  return (
    <div className={styles.container}>
      <FormWrapper divisions={divisionsData} materials={materialsData} />
    </div>
  );
};

export default MultistepsForm;
