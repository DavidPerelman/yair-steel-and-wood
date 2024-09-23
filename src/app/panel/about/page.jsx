"use client";

import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import Image from "next/image";
import { callApiGet, callApiPtach } from "@/lib/action";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import UploadAboutImageForm from "@/components/uploadAboutImageForm/UploadAboutImageForm";

const AboutPage = () => {
  const [pageContent, setPageContent] = useState(null);
  const [formData, setFormData] = useState(null);
  const [changeImage, setChangeImage] = useState(false);
  const [imageThumbnail, setImageThumbnail] = useState("/");
  const [newImageUrl, setNewImageUrl] = useState("");

  const removeContentParagraph = (index) => {
    const newContent = [...formData.filter((_, i) => i !== index)];
    setFormData(newContent);
  };

  const handleContentChange = (index, value) => {
    const newContent = [...formData];
    newContent[index] = value;
    setFormData(newContent);
    console.log(formData);
  };

  const addDescriptionParagraph = () => {
    const newContent = [...formData];
    newContent[formData.length] = "";
    setFormData(newContent);
  };

  const updatePageContent = async () => {
    try {
      const response = await callApiPtach(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about`,
        {
          id: pageContent._id,
          type: "content",
          data: formData,
        }
      );

      if (response.updatedDocument) {
        alert("העמוד עודכן בהצלחה!");
        setPageContent(response.updatedDocument); // Set the updated document directly
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeImageHandler = async () => {
    try {
      const response = await callApiPtach(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about`,
        {
          id: pageContent._id,
          type: "backgroundImage",
          data: newImageUrl,
        }
      );

      if (response.updatedDocument) {
        alert("התמונה עודכנה בהצלחה!");
        setPageContent(response.updatedDocument); // Update page content after successful API call
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/about`
        );

        if (data.data) {
          setImageThumbnail(data.data[0].backgroundImage);
          setPageContent(data.data[0]);
          setFormData(data.data[0].content);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPageContent();
  }, []);

  return (
    <>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      <div className={styles.imagePageContainer}>
        <h3>תמונת רקע:</h3>
        {pageContent !== null ? (
          <Image
            alt="About page image"
            src={imageThumbnail}
            width={140}
            height={110}
            style={{ alignSelf: "center" }}
            unoptimized
            className={styles.image}
          />
        ) : (
          <></>
        )}
        <button
          className={styles.changeImageContainer}
          onClick={() => setChangeImage(!changeImage)}
        >
          {changeImage ? "ביטול" : "שינוי"}
        </button>
        {changeImage && (
          <>
            {/* <form action={formAction}>
              <div className={styles.changeImageDiv}>
                <p className="mb-6">
                  <label htmlFor="image">בחר תמונת תצוגה:</label>
                  <br />
                </p>
                <input id="image" type="file" name="image" required />
              </div>
              <button>העלאת תמונה לשרת</button>
            </form> */}
            <UploadAboutImageForm
              setImageThumbnail={setImageThumbnail}
              setNewImageUrl={setNewImageUrl}
            />
            <button onClick={changeImageHandler}>שנה תמונה</button>
          </>
        )}
      </div>
      <div>
        <div className={styles.textContent}>
          {pageContent !== null ? (
            <>
              <h1 className={styles.header}>{pageContent.header}</h1>
              {formData.map((paragraph, index) => (
                <div key={index} className={styles.contentParagraph}>
                  <label
                    htmlFor={`content-${index}`}
                    className={styles.contentParagraphHeader}
                  >
                    <button
                      onClick={() => removeContentParagraph(index)}
                      disabled={formData.length === 1}
                    >
                      מחק
                    </button>
                  </label>
                  <textarea
                    id={`description-${index}`}
                    value={paragraph}
                    onChange={(e) => handleContentChange(index, e.target.value)}
                    required
                    rows={3}
                    className={styles.textarea}
                  />
                </div>
              ))}
              <button type="button" onClick={addDescriptionParagraph}>
                הוסף פסקה
              </button>
              <button type="button" onClick={updatePageContent}>
                שמור
              </button>
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
