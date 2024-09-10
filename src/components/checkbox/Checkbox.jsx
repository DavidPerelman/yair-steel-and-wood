import styles from "./checkbox.module.css";

const Checkbox = ({ id, label, updateFilters }) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" value={id} onChange={(e) => updateFilters(e)} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
