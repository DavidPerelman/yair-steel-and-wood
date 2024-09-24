"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./createPage.module.css";
import NewPageForm from "@/components/newPageForm/NewPageForm";

const CreateAboutPage = () => {
  const [title, setTitle] = useState("אודות");
  const [sections, setSections] = useState([
    { title: "אודות", paragraphs: [""] },
  ]); // Updated to include section titles
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log({ title, sections, images });
  }, [title, sections, images]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, sections, images });

    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, sections, images }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle changes to sections titles
  const handleSectionTitleChange = (index, value) => {
    const newSection = [...sections];
    newSection[index].title = value; // Update the title of the specific sections
    setSections(newSection);
  };

  // Handle sections changes for a specific sections and paragraph
  const handleSectionChange = (sectionIndex, paragraphIndex, value) => {
    const newSection = [...sections];
    newSection[sectionIndex].paragraphs[paragraphIndex] = value; // Update specific paragraph in a sections
    setSections(newSection);
  };

  // Add a new paragraph to the last sections
  const addParagraph = (sectionIndex) => {
    const newSection = [...sections];
    newSection[sectionIndex].paragraphs.push(""); // Add new paragraph to the sections
    setSections(newSection);
  };

  // Add a new sections
  const addSection = () => {
    setSections([...sections, { title: "", paragraphs: [""] }]); // Add a new section with one paragraph
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
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
      setImages([
        ...images,
        { secure_url: data.secure_url, public_id: data.public_id },
      ]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <NewPageForm
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        sections={sections}
        addSection={addSection}
        handleSectionTitleChange={handleSectionTitleChange}
        handleSectionChange={handleSectionChange}
        addParagraph={addParagraph}
        handleImageUpload={handleImageUpload}
        images={images}
      />
    </div>
  );
};

export default CreateAboutPage;
