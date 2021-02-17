export const InputField = ({
  value,
  setValue,
  label,
  htmlFor,
  placeholder = "",
  type = "text",
  minLength = 1,
  icon = undefined,
  errorMessage = undefined,
}) => {
  const determineClasses = () => {
    if (value && value.length > minLength) {
      return errorMessage ? "invalid" : "valid";
    } else return "";
  };

  return (
    <div className="input-field">
      {icon && <i className="material-icons prefix">{icon}</i>}
      <input
        id={htmlFor}
        type={type}
        className={determineClasses()}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {label && <label htmlFor={htmlFor}>{label}</label>}
      {errorMessage && <span class="helper-text">{errorMessage}</span>}
    </div>
  );
};
