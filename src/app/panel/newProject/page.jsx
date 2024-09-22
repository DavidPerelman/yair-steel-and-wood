import styles from "./newProject.module.css";
import MultistepsForm from "@/components/multistepsForm/MultistepsForm";

const NewProjectPage = async () => {
  const resDivisions = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/divisions`
  );
  const divisions = await resDivisions.json();
  const resMaterials = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/materials`
  );
  const materials = await resMaterials.json();

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
