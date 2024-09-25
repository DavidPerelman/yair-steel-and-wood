import Image from "next/image";
import styles from "./newPageForm.module.css";

const NewPageForm = ({
  handleSubmit,
  title,
  setTitle,
  sections,
  addSection,
  handleSectionTitleChange,
  handleSectionChange,
  addParagraph,
  handleImageUpload,
  images,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="כותרת הדף"
        required
      />

      {sections.map((sec, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          {title !== "אודות" ? (
            <input
              type="text"
              value={sec.title}
              onChange={(e) =>
                handleSectionTitleChange(sectionIndex, e.target.value)
              }
              placeholder={`כותרת קטע ${sectionIndex + 1}`}
              required
            />
          ) : (
            <></>
          )}

          {sec.paragraphs.map((paragraph, paragraphIndex) => (
            <textarea
              key={`${sectionIndex}-${paragraphIndex}`}
              value={paragraph}
              onChange={(e) =>
                handleSectionChange(
                  sectionIndex,
                  paragraphIndex,
                  e.target.value
                )
              }
              placeholder={`פסקה ${paragraphIndex + 1} - קטע ${
                sectionIndex + 1
              }`}
              required
            />
          ))}

          <button
            className={styles.button}
            type="button"
            onClick={() => addParagraph(sectionIndex)}
          >
            הוסף פסקה
          </button>
        </div>
      ))}

      {title !== "אודות" ? (
        <button className={styles.button} type="button" onClick={addSection}>
          הוסף קטע
        </button>
      ) : (
        <></>
      )}

      <div className={styles.image}>
        {title === "אודות" ? <p>תמונת רקע:</p> : <> תמונה:</>}
        {images.length === 0 && (
          <input type="file" onChange={handleImageUpload} accept="image/*" />
        )}
        {images.length > 0 && <button>מחק תמונה</button>}
      </div>
      <div>
        {images.map((image, index) =>
          image && image.secure_url ? (
            <Image
              key={index}
              src={image.secure_url}
              alt={`Uploaded image ${index + 1}`}
              width={100}
              height={100}
              unoptimized
            />
          ) : (
            <></>
          )
        )}
      </div>

      <button className={styles.button} type="submit">
        צור דף
      </button>
    </form>
  );
};

export default NewPageForm;
