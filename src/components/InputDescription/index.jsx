import styles from "./style.module.scss";

export const InputDescription = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  required,
}) => {
  return (
    <div className={styles.inputBox}>
      <label className="formTypograpy one" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        id={id}
        name={id}
        required={required}
      />
    </div>
  );
};
