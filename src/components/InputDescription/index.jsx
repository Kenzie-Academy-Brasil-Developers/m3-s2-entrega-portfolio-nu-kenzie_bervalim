export const InputDescription = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        id={id}
        name={id}
      />
    </div>
  );
};
