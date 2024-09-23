"use client";

import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import Image from "next/image";
import { callApiGet, callApiPtach, uploadToCloudinary } from "@/lib/action";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { useFormState } from "react-dom";

const AboutPage = () => {
  const [state, formAction] = useFormState(uploadToCloudinary, undefined);
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
  };

  const addDescriptionParagraph = () => {
    const newContent = [...formData];
    newContent[formData.length] = "";
    setFormData(newContent);
  };

  const updatePageContent = () => {
    console.log(formData);
  };

  const changeImageHandler = async () => {
    try {
      const newImage = await callApiPtach(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about`,
        { id: pageContent._id, type: "backgroundImage", data: newImageUrl }
      );

      if (newImage) {
        alert("התמונה עודכנה בהצלחה!");
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

    if (state !== undefined) {
      setNewImageUrl(state.secure_url);
      setImageThumbnail(state.secure_url);
    } else {
      getPageContent();
    }
  }, [state]);

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
            <form action={formAction}>
              <div className={styles.changeImageDiv}>
                <p className="mb-6">
                  <label
                    htmlFor="image"
                    className="block font-semibold text-sm mb-2"
                  >
                    בחר תמונת תצוגה:
                  </label>
                  <br />
                </p>
                <input
                  id="image"
                  className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="file"
                  name="image"
                  required
                />
              </div>
              <button>העלאת תמונה לשרת</button>
            </form>
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
                    {/* פסקה {index + 1} */}
                    <button
                      onClick={() => removeContentParagraph(index)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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
              <button
                type="button"
                onClick={addDescriptionParagraph}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                הוסף פסקה
              </button>
              <button
                type="button"
                onClick={updatePageContent}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
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
