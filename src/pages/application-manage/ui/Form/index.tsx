import styles from "./styles.module.css";
import Typography from "@/shared/ui/Typography";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Textarea from "@/shared/ui/Textarea";
import RepeatIcon from "@icons/repeat.svg?react";
import { useState } from "react";

const INIT_FORM = {
  jobTitle: { value: "qqq", error: "", touched: false },
  company: { value: "www", error: "", touched: false },
  skills: { value: "eee", error: "", touched: false },
  details: { value: "rrr", error: "", touched: false },
} as const;

const VALIDATION_MAP = {
  jobTitle: (value: string) => (value ? "" : "Job title is required"),
  company: (value: string) => (value ? "" : "Company is required"),
  skills: (value: string) => (value ? "" : "Skills are required"),
  details: (value: string) =>
    value.length <= 1200 ? "" : "Details must be less than 1200 characters",
} as const;

const From = () => {
  const isGenerated = false;

  const [form, setForm] = useState(INIT_FORM);

  const validateAllFields = () => {
    let isInvalidForm = false;
    Object.entries(form).forEach(([key, values]) => {
      const isError = handleChange({
        field: key as keyof typeof form,
        value: values.value,
      });
      if (isError) isInvalidForm = true;
    });
    return isInvalidForm;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isInvalidForm = validateAllFields();
    console.log("isInvalidForm: ", isInvalidForm);
    if (isInvalidForm) return;

    console.log("SUBMIT: ", form);
  };

  const handleChange = ({ field, value }: { field: string; value: string }) => {
    const validate = VALIDATION_MAP[field as keyof typeof INIT_FORM];
    const error = validate?.(value) || "";
    setForm((prev) => ({ ...prev, [field]: { value, error, touched: true } }));
    return error;
  };

  console.log("form: ", form);

  return (
    <div className={styles.fromRoot}>
      <Typography as="h2" type="h2">
        Product manager, Apple
      </Typography>
      <div className={styles.divider} />
      <form action="submit" className={styles.from} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Input
            label="Job title"
            name="jobTitle"
            {...form.jobTitle}
            onChange={handleChange}
          />
          <Input
            label="Company"
            name="company"
            {...form.company}
            onChange={handleChange}
          />
        </div>
        <Input
          label="I am good at..."
          name="skills"
          {...form.skills}
          onChange={handleChange}
        />
        <Textarea
          label="Additional details"
          name="details"
          {...form.details}
          onChange={handleChange}
          maxLength={1200}
        />
        {isGenerated ? (
          <Button
            variant="outlined"
            size="large"
            startIcon={<RepeatIcon />}
            type="submit"
          >
            Try Again
          </Button>
        ) : (
          <Button variant="contained" size="large">
            Generate Now
          </Button>
        )}
      </form>
    </div>
  );
};

export default From;
