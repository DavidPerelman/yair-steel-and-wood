import styles from "./checkbox.module.css";

const Checkbox = ({ id, label, updateFilters }) => {
  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" value={id} onChange={(e) => updateFilters(e)} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
