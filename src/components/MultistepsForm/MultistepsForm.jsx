import { connectToDb } from "@/lib/connectToMongo";
import FormWrapper from "../formWrapper/FormWrapper";
import styles from "./multistepsForm.module.css";
import { fetchData, getDivisions, getMaterials, getUsers } from "@/lib/data";

const MultistepsForm = async ({ divisionsData, materialsData }) => {
  // const divisions = await getDivisions();
  // const divisionsData = JSON.parse(JSON.stringify(divisions));
  // const materials = await getMaterials();
  // const materialsData = JSON.parse(JSON.stringify(materials));

  // const users = await fetchData();

  return (
    <div className={styles.container}>
      <FormWrapper divisions={divisionsData} materials={materialsData} />
    </div>
  );
};

export default MultistepsForm;

export async function getServerSideProps() {
  // Fetch data from external API
  const divisions = await getDivisions();
  const divisionsData = JSON.parse(JSON.stringify(divisions));
  const materials = await getMaterials();
  const materialsData = JSON.parse(JSON.stringify(materials));

  // Pass data to the page via props
  return { props: { divisionsData, materialsData } };
}
