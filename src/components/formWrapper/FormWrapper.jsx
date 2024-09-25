"use client";
import { useEffect, useState } from "react";
import styles from "./formWrapper.module.css";
import NewProjectForm from "../newProjectForm/NewProjectForm";
import UploadImageForm from "../uploadImagesForm/UploadImagesForm";
import UploadThumbnailForm from "../uploadThumbnailForm/UploadThumbnailForm";
import { useRouter } from "next/navigation";

const FormWrapper = ({ divisions, materials }) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState([""]);
  const [projectImages, setProjectImages] = useState([]);
  const [projectThumbnail, setProjectThumbnail] = useState({});
  const [projectPrice, setProjectPrice] = useState("");
  const [projectHeight, setProjectHeight] = useState("");
  const [projectWidth, setProjectWidth] = useState("");
  const [projectLength, setProjectLength] = useState("");
  const [projectDivision, setProjectDivision] = useState("");
  const [projectMaterial, setProjectMaterial] = useState("");

  const formTitle = ["פרטי הפרויקט", "תמונת תצוגה", "תמונות"];

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projectTitle,
          description: projectDescription,
          images: projectImages,
          thumbnail: projectThumbnail,
          price: projectPrice,
          height: projectHeight,
          width: projectWidth,
          length: projectLength,
          division: projectDivision,
          material: projectMaterial,
        }),
      });
      if (res.ok) {
        router.push("/panel/projects");
        console.log(res.json());
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageUpload = async (uploadedImage, type) => {
    const formData = new FormData();
    formData.append("file", uploadedImage);
    formData.append("upload_preset", "xexjtgmt");
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      const newImageObject = {
        secure_url: data.secure_url,
        public_id: data.public_id,
      };

      if (type === "thumbnail") {
        setProjectThumbnail(newImageObject);
      } else if (type === "images") {
        const newImage = [...projectImages];
        newImage.push(newImageObject);
        setProjectImages(newImage);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const nextPageClick = () => {
    if (page === 0) {
      if (
        projectTitle === "" ||
        projectDescription[0] === "" ||
        projectPrice === "" ||
        projectHeight === "" ||
        projectWidth === "" ||
        projectLength === "" ||
        projectDivision.length === 0 ||
        projectMaterial.length === 0
      ) {
        alert("נא למלא את הטופס!");
        return;
      } else {
        setPage((currPage) => currPage + 1);
      }
    } else if (page === 1) {
      if (!projectThumbnail) {
        alert("נא להוסיף תמונה!");
        return;
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
  };

  const addProjectClick = async () => {
    if (projectImages.length === 0) {
      alert("נא להוסיף תמונות!");
      return;
    } else {
      await handleSubmit();
    }
  };

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <NewProjectForm
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
          setProjectDescription={setProjectDescription}
          projectDescription={projectDescription}
          projectPrice={projectPrice}
          setProjectPrice={setProjectPrice}
          projectHeight={projectHeight}
          setProjectHeight={setProjectHeight}
          projectWidth={projectWidth}
          setProjectWidth={setProjectWidth}
          projectLength={projectLength}
          setProjectLength={setProjectLength}
          divisions={divisions}
          setProjectDivision={setProjectDivision}
          materials={materials}
          setProjectMaterial={setProjectMaterial}
        />
      );
    } else if (page === 1) {
      return (
        <UploadThumbnailForm
          projectThumbnail={projectThumbnail}
          setProjectThumbnail={setProjectThumbnail}
          handleImageUpload={handleImageUpload}
        />
      );
    } else {
      return (
        <UploadImageForm
          projectImages={projectImages}
          setProjectImages={setProjectImages}
          handleImageUpload={handleImageUpload}
        />
      );
    }
  };

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
