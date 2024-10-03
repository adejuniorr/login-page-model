import { useState } from "react";

import { InputField } from "./InputField";
import { FaExclamationTriangle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const PasswordInput = ({
  name,
  label,
  error,
  required,
  placeholder,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <InputField>
        <label className="floating_label">{label}</label>
        <span className={`input_container ${error ? "error" : ""}`}>
          <input
            required={required}
            type={isPasswordVisible ? "text" : "password"}
            name={name}
            placeholder={placeholder}
          />
          {error ? (
            <>
              {isPasswordVisible ? (
                <FaRegEyeSlash onClick={togglePasswordVisibility} />
              ) : (
                <FaRegEye onClick={togglePasswordVisibility} />
              )}{" "}
              <FaExclamationTriangle title={`${error.password}`} />
            </>
          ) : isPasswordVisible ? (
            <FaRegEyeSlash onClick={togglePasswordVisibility} />
          ) : (
            <FaRegEye onClick={togglePasswordVisibility} />
          )}
        </span>
        <p className="input_error_msg"></p>
      </InputField>
    </>
  );
};
