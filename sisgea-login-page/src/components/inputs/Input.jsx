import { InputField } from "./InputField";
import { FaExclamationTriangle } from "react-icons/fa";

export const Input = ({
  type,
  name,
  label,
  icon,
  error,
  required,
  placeholder,
  inputFormater,
  setFormatFlag,
  onChangeHandler,
}) => {
  return (
    <>
      <InputField>
        <label className="floating_label">{label}</label>
        <span className={`input_container ${error ? "error" : ""}`}>
          <input
            required={required}
            type={type}
            name={name}
            placeholder={placeholder}
            onKeyUp={(e) => inputFormater(e, setFormatFlag)}
            onChange={onChangeHandler}
          />
          {error ? <FaExclamationTriangle title={`${error}`} /> : icon}
        </span>
        <p className="input_error_msg">{error}</p>
      </InputField>
    </>
  );
};
