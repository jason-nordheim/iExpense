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
    enabled = true,
}) => {
    const determineClasses = () => {
        if (value && value.length > minLength) {
            return errorMessage ? "invalid" : "";
        } else return "";
    };

    return (
        <div className={`input-field ${enabled ? '' : 'disabled'}`}>
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
