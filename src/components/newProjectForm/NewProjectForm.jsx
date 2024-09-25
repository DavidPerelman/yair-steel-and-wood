"use client";

import styles from "./newProjectForm.module.css";

const NewProjectForm = ({
  divisions,
  materials,
  projectTitle,
  setProjectTitle,
  projectDescription,
  setProjectDescription,
  projectPrice,
  setProjectPrice,
  projectHeight,
  setProjectHeight,
  projectWidth,
  setProjectWidth,
  projectLength,
  setProjectLength,
  projectDivision,
  setProjectDivision,
  projectMaterial,
  setProjectMaterial,
}) => {
  const addDescriptionParagraph = () => {
    const newParagraph = [...projectDescription];
    newParagraph.push("");
    setProjectDescription(newParagraph);
  };

  const handleDescriptionParagraph = (paragraphIndex, value) => {
    const newSection = [...projectDescription];
    newSection[paragraphIndex] = value;
    setProjectDescription(newSection);
  };

  const removeDescriptionParagraph = (index) => {
    const newContent = [...projectDescription.filter((_, i) => i !== index)];
    setProjectDescription(newContent);
  };

  const onOptionDivisionChangeHandler = (e) => {
    setProjectDivision(e.target.value);
  };

  const onOptionMaterialChangeHandler = (e) => {
    setProjectMaterial(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label>שם הפרויקט:</label>
      <input
        autoFocus
        required
        type="text"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />

      <div className={styles.descriptions}>
        <label>תיאור הפרויקט:</label>
        {projectDescription.map((paragraph, paragraphIndex) => (
          <div key={paragraphIndex} className={styles.descriptionParagraph}>
            <textarea
              value={paragraph}
              onChange={(e) =>
                handleDescriptionParagraph(paragraphIndex, e.target.value)
              }
              placeholder={`פסקה ${paragraphIndex + 1}`}
              required
            />
            <button
              onClick={() => removeDescriptionParagraph(paragraphIndex)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              disabled={projectDescription.length === 1}
            >
              מחק פסקה {paragraphIndex + 1}
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addDescriptionParagraph}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          הוסף פסקה
        </button>
      </div>

      <label>מחיר:</label>
      <input
        required
        min={1}
        type="number"
        value={projectPrice}
        onChange={(e) => setProjectPrice(e.target.value)}
      />

      <label>גובה:</label>
      <input
        required
        min={1}
        type="number"
        value={projectHeight}
        onChange={(e) => setProjectHeight(e.target.value)}
      />

      <label>רוחב:</label>
      <input
        required
        min={1}
        type="number"
        value={projectWidth}
        onChange={(e) => setProjectWidth(e.target.value)}
      />

      <label>אורך:</label>
      <input
        required
        min={1}
        type="number"
        value={projectLength}
        onChange={(e) => setProjectLength(e.target.value)}
      />

      <select
        value={""}
        onChange={onOptionDivisionChangeHandler}
        name="division"
        id="division"
      >
        <option value="" disabled>
          בחר מחלקה
        </option>
        {divisions &&
          divisions.length > 0 &&
          divisions.map((item) => (
            <option key={item.slug} value={item._id}>
              {item.title}
            </option>
          ))}
      </select>

      <label htmlFor="material">חומר:</label>
      <select
        value={""}
        onChange={onOptionMaterialChangeHandler}
        name="material"
        id="material"
      >
        <option value="" disabled>
          בחר חומר
        </option>
        {materials &&
          materials.length > 0 &&
          materials.map((item) => (
            <option key={item.slug} value={item._id}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default NewProjectForm;
