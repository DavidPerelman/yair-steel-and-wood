"use client";

import styles from "./newProjectForm.module.css";

const NewProjectForm = ({ formData, setFormData }) => {
  const onOptionDivisionChangeHandler = (e) => {
    // setDivision(e.target.value);
    setFormData({ ...formData, division: e.target.value });
  };

  const onOptionMaterialChangeHandler = (e) => {
    // setMaterial(e.target.value);
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
        autoFocus
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
        value={formData.size.heigth}
        onChange={(e) => {
          const f = { ...formData };
          f.size.heigth = e.target.value;
          setFormData(f);
        }}
      />

      <label>רוחב:</label>
      <input
        // required
        min={1}
        type="number"
        value={formData.size.width}
        onChange={(e) => {
          const f = { ...formData };
          f.size.width = e.target.value;
          setFormData(f);
        }}
      />

      <label>אורך:</label>
      <input
        // required
        min={1}
        type="number"
        value={formData.size.length}
        onChange={(e) => {
          const f = { ...formData };
          f.size.length = e.target.value;
          setFormData(f);
        }}
      />

      <label htmlFor="division">מחלקה:</label>
      <select
        name="division"
        id="division"
        onChange={onOptionDivisionChangeHandler}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label htmlFor="material">חומר:</label>
      <select
        name="material"
        id="material"
        onChange={onOptionMaterialChangeHandler}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default NewProjectForm;
