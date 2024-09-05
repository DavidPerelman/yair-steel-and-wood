"use client";

import styles from "./newProjectForm.module.css";

const NewProjectForm = ({ formData, setFormData, divisions, materials }) => {
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

      <label>תיאור:</label>
      <input
        // required
        type="text"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

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
        <option value="division" disabled selected>
          בחר מחלקה
        </option>
        {divisions.map((item) => (
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
        <option value="division" disabled selected>
          בחר חומר
        </option>
        {materials.map((item) => (
          <option key={item.slug} value={item._id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NewProjectForm;
