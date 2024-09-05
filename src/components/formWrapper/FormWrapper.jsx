import { useEffect, useState } from "react";
import styles from "./formWrapper.module.css";
import NewProjectForm from "../newProjectForm/NewProjectForm";
import UploadImageForm from "../uploadImagesForm/UploadImagesForm";
import UploadThumbnailForm from "../uploadThumbnailForm/UploadThumbnailForm";
import { addProject } from "@/lib/data";

const FormWrapper = ({ divisions, materials }) => {
  const addProjectClick = async () => {
    const newProject = await addProject(formData);
  };

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: [],
    thumbnail: "",
    price: "",
    height: "",
    width: "",
    length: "",
    division: [],
    material: [],
  });
  const formTitle = ["פרטי הפרויקט", "תמונת תצוגה", "תמונות"];

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <NewProjectForm
          formData={formData}
          setFormData={setFormData}
          divisions={divisions}
          materials={materials}
        />
      );
    } else if (page === 1) {
      return (
        <UploadThumbnailForm formData={formData} setFormData={setFormData} />
      );
    } else {
      return <UploadImageForm formData={formData} setFormData={setFormData} />;
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <div className={styles.progress_bar}>
        <div className={styles.steps}>
          {formTitle.length} / {page + 1}
        </div>
      </div>
      <div className={styles.form_container}>
        <h2 className={styles.header}>{formTitle[page]}</h2>
        <div className={styles.body}>{pageDisplay()}</div>
        <div className={styles.footer}>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              console.log("addProjectClick");

              if (page === formTitle.length - 1) {
                addProjectClick();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === formTitle.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
