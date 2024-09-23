import React, { useEffect } from "react";
import styles from "./aboutPageContentForm.module.css";

const AboutPageContentForm = ({
  pageContent,
  formData,
  removeContentParagraph,
  handleContentChange,
  addDescriptionParagraph,
  updatePageContent,
}) => {
  useEffect(() => {
    // if (state !== undefined) {
    //   setNewImageUrl(state.secure_url);
    //   setImageThumbnail(state.secure_url);
    // }
  }, []);

  return (
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
  );
};

export default AboutPageContentForm;
