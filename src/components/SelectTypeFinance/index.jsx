import styles from "./style.module.scss";

export const SelectTypeFinance = ({
  children,
  id,
  label,
  value,
  setValue,
  required,
}) => {
  return (
    <div className={styles.selectBox}>
      <label className="formTypograpy one" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
      >
        {children}
      </select>
    </div>
  );
};
