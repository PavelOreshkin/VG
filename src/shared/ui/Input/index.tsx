import { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Typography from "../Typography";

type InputProps = {
  label: string;
  value?: string;
  errorText?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => string | undefined;
  placeholder?: string;
  className?: string;
};

export const Input = ({
  label,
  value,
  errorText,
  onChange,
  validate,
  placeholder,
  className,
}: InputProps) => {
  const [touched, setTouched] = useState(true);
  const [error, setError] = useState<string | undefined>(errorText);

  // const handleBlur = () => {
  //   setTouched(true);
  //   setError(validate(value));
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   onChange(newValue);
  //   if (touched) {
  //     setError(validate(newValue));
  //   }
  // };

  return (
    <div className={clsx(styles.root, className)}>
      <label className={styles.label}>{label}</label>
      <input
        className={clsx(styles.input, {
          [styles.inputError]: touched && error,
        })}
        // onChange={handleChange}
        type="text"
        value={value}
        // onChange={handleChange}
        // onBlur={handleBlur}
        placeholder={placeholder}
      />
      {touched && error && (
        <Typography className={styles.error} type="caption">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default Input;
