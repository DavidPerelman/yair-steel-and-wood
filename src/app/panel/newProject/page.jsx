"use client";

import { useFormState } from "react-dom";
import styles from "./newProject.module.css";
import UploadImage from "@/components/uploadImage/UploadImage";
import { useState } from "react";
import { addProject } from "@/lib/action";
import UploadImageForm from "@/components/uploadImageForm/UploadImageForm";

const NewProjectPage = () => {
  // const [state, formAction] = useFormState(addProject, undefined);

  const [size, setSize] = useState({
    heigth: "",
    width: "",
    length: "",
  });

  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    price: "",
    material: "",
    division: "",
  });

  const addThumbnail = () => {
    // setThumbnail(thumbnailUrl);
    console.log(thumbnail);
  };

  const addPicture = () => {
    setImages([...images, imageUrl]);
    console.log(images);
  };

  const sizeHandleChange = (e) => {
    const { name, value } = e.target;
    setSize((prevState) => ({ ...prevState, [name]: value }));
    console.log(size);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  };

  const [selectedMaterialValue, setSelectedMaterialValue] =
    useState("Material");
  const [selectedDivisionValue, setSelectedDivisionValue] =
    useState("Division");

  const handleMaterialChange = (e) => {
    e.preventDefault();

    setSelectedMaterialValue(e.target.value);

    console.log(selectedMaterialValue);
  };

  const handleDivisionChange = (e) => {
    e.preventDefault();

    setSelectedDivisionValue(e.target.value);

    console.log(selectedDivisionValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData((prevState) => ({ ...prevState, size: size }));
    setFormData((prevState) => ({ ...prevState, thumbnail: thumbnail }));
    setFormData((prevState) => ({ ...prevState, images: images }));
    setFormData((prevState) => ({
      ...prevState,
      material: selectedMaterialValue,
    }));

    setFormData((prevState) => ({
      ...prevState,
      division: selectedDivisionValue,
    }));

    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.NewProjectPage}>
        {/* <form className={styles.form}>
          <h2>Add Project</h2>
          <input
            type="text"
            name="title"
            placeholder="כותרת"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="slug"
            placeholder="slug"
            value={formData.slug}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="description"
            placeholder="תיאור"
            rows={10}
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <div>
            <span>תצוגה: </span>
            <UploadImage setUrl={setThumbnailUrl} />
            <button onClick={addThumbnail}>הוסף תמונת תצוגה</button>
          </div>
          <span>תמונות: </span>
          <input
            type="number"
            name="price"
            placeholder="מחיר"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="heigth"
            placeholder="גובה"
            value={size.heigth}
            onChange={sizeHandleChange}
          />
          <input
            type="number"
            name="width"
            placeholder="רוחב"
            value={size.width}
            onChange={sizeHandleChange}
          />
          <input
            type="number"
            name="length"
            placeholder="אורך"
            value={size.length}
            onChange={sizeHandleChange}
          />
          <select value={selectedMaterialValue} onChange={handleMaterialChange}>
            <option value="Material" disabled>
              חומר
            </option>
            <option value="Material 1">חומר 1</option>
            <option value="Material 2">חומר 2</option>
            <option value="Material 3">חומר 3</option>
          </select>
          <select value={selectedDivisionValue} onChange={handleDivisionChange}>
            <option value="Division" disabled>
              מחלקה
            </option>
            <option value="Division 1">מחלקה 1</option>
            <option value="Division 2">מחלקה 2</option>
            <option value="Division 3">מחלקה 3</option>
          </select>
          <button onClick={handleSubmit}>Add</button>
        </form> */}
        <UploadImageForm />
      </div>
    </div>
  );
};

export default NewProjectPage;
