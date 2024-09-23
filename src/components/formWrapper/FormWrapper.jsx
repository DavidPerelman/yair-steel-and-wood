"use client";
import { useEffect, useState } from "react";
import styles from "./formWrapper.module.css";
import NewProjectForm from "../newProjectForm/NewProjectForm";
import UploadImageForm from "../uploadImagesForm/UploadImagesForm";
import UploadThumbnailForm from "../uploadThumbnailForm/UploadThumbnailForm";
import { callApiPost } from "@/lib/action";
import { redirect } from "next/navigation";

const FormWrapper = ({ divisions, materials }) => {
  const [newProjectAdded, setNewProjectAdded] = useState(false);

  const nextPageClick = () => {
    if (page === 0) {
      if (
        formData.title === "" ||
        formData.description[0] === "" ||
        formData.price === "" ||
        formData.height === "" ||
        formData.width === "" ||
        formData.length === "" ||
        formData.division.length === 0 ||
        formData.material.length === 0
      ) {
        alert("נא למלא את הטופס!");
        return;
      } else {
        setPage((currPage) => currPage + 1);
      }
    } else if (page === 1) {
      if (formData.thumbnail === "") {
        alert("נא להוסיף תמונה!");
        return;
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
  };

  const addProjectClick = async () => {
    if (formData.images.length === 0) {
      alert("נא להוסיף תמונות!");
      return;
    } else {
      const newProject = await callApiPost(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        formData
      );

      if (newProject) {
        setNewProjectAdded(true);
      }
    }
  };

  useEffect(() => {
    if (newProjectAdded) {
      redirect("/panel/projectsPanel");
    }
  }, [newProjectAdded]);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: [""],
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
              if (page === formTitle.length - 1) {
                addProjectClick();
              } else {
                nextPageClick();
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
