import styles from "./checkbox.module.css";

const Checkbox = ({ id, label, updateFilters }) => {
  return (
    <label class={styles.container}>
      {label}
      <input type="checkbox" value={id} onChange={(e) => updateFilters(e)} />
      <span class={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
