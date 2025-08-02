import { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Typography from "../Typography";

type TextareaProps = {
  label: string;
  value?: string;
  maxLength?: number;
  errorText?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => string | undefined;
  placeholder?: string;
  className?: string;
};

export const Textarea = ({
  label,
  value,
  maxLength,
  errorText,
  onChange,
  validate,
  placeholder,
  className,
}: TextareaProps) => {
  const [value2, setValue2] = useState("");
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
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) {
      setError(`Maximum length is ${maxLength} characters`);
    } else {
      setError(undefined);
    }
    setValue2(e.target.value);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={clsx(styles.textarea, {
          [styles.textareaError]: touched && error,
        })}
        onChange={handleChange}
        value={value2}
        // onChange={handleChange}
        // onBlur={handleBlur}
        placeholder={placeholder}
      />
      <Typography
        className={clsx(styles.caption, { [styles.error]: error })}
        type="caption"
      >
        {value2.length} / {maxLength}
      </Typography>
    </div>
  );
};

export default Textarea;
