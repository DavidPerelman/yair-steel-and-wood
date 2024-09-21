"use client";

import styles from "./newProjectForm.module.css";

const NewProjectForm = ({ formData, setFormData, divisions, materials }) => {
  const handleDescriptionChange = (index, value) => {
    const newDescription = [...formData.description];
    newDescription[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      description: newDescription,
    }));
  };

  const addDescriptionParagraph = () => {
    setFormData((prevState) => ({
      ...prevState,
      description: [...prevState.description, ""],
    }));
  };

  const removeDescriptionParagraph = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      description: prevState.description.filter((_, i) => i !== index),
    }));
  };

  const onOptionDivisionChangeHandler = (e) => {
    setFormData({ ...formData, division: e.target.value });
  };

  const onOptionMaterialChangeHandler = (e) => {
    setFormData({ ...formData, material: e.target.value });
  };

  return (
    <div className={styles.container}>
      <label>שם הפרויקט:</label>
      <input
        autoFocus
        // required
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <div className={styles.descriptions}>
        <label>תיאור הפרויקט:</label>
        {formData.description.map((paragraph, index) => (
          <div key={index} className={styles.descriptionParagraph}>
            <label
              htmlFor={`description-${index}`}
              className={styles.descriptionParagraphHeader}
            >
              פסקה {index + 1}
              <button
                onClick={() => removeDescriptionParagraph(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={formData.description.length === 1}
              >
                מחק
              </button>
            </label>
            <textarea
              id={`description-${index}`}
              value={paragraph}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              required
              rows={3}
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
      </div>

      {/* <input
        // required
        type="text"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      /> */}

      <label>מחיר:</label>
      <input
        // required
        min={1}
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />

      <label>גובה:</label>
      <input
        // required
        min={1}
        type="number"
        value={formData.height}
        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
      />

      <label>רוחב:</label>
      <input
        // required
        min={1}
        type="number"
        value={formData.width}
        onChange={(e) => setFormData({ ...formData, width: e.target.value })}
      />

      <label>אורך:</label>
      <input
        // required
        min={1}
        type="number"
        value={formData.length}
        onChange={(e) => setFormData({ ...formData, length: e.target.value })}
      />

      <label htmlFor="division">מחלקה:</label>
      <select
        name="division"
        id="division"
        onChange={onOptionDivisionChangeHandler}
      >
        <option value="division" disabled defaultValue="בחר מחלקה">
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
        name="material"
        id="material"
        onChange={onOptionMaterialChangeHandler}
      >
        <option value="division" disabled defaultValue="">
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
