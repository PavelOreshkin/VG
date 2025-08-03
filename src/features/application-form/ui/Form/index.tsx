import styles from "./styles.module.css";
import Typography from "@/shared/ui/Typography";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Textarea from "@/shared/ui/Textarea";
import RepeatIcon from "@icons/repeat.svg?react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { INIT_FORM } from "../../model";
import {
  validateField,
  validateFields,
  disabledSubmitButton,
} from "../../model/validation";
import { useApplicationStore } from "@/entities/application/model";
import { useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";
import { sendPrompt } from "@/entities/AI";

const From = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(INIT_FORM);

  const {
    loading,
    setLoading,
    addApplication,
    updateApplication,
    getApplication,
  } = useApplicationStore();

  const isEditFormMode = Boolean(id);

  useEffect(() => {
    if (!id) return;
    const application = getApplication(id);
    setForm((prev) => ({
      jobTitle: { ...prev.jobTitle, value: application?.jobTitle || "" },
      company: { ...prev.company, value: application?.company || "" },
      skills: { ...prev.skills, value: application?.skills || "" },
      details: { ...prev.details, value: application?.details || "" },
    }));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);

      e.preventDefault();

      const isInvalidForm = validateFields(form, handleChange);
      console.log("isInvalidForm: ", isInvalidForm);
      if (isInvalidForm) return;

      const response = await sendPrompt({
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        skills: form.skills.value,
        details: form.details.value,
      });

      if (isEditFormMode && id) {
        updateApplication({
          id,
          jobTitle: form.jobTitle.value,
          company: form.company.value,
          skills: form.skills.value,
          details: form.details.value,
          text: response as string,
        });
        return;
      }

      const newId = addApplication({
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        skills: form.skills.value,
        details: form.details.value,
        text: response as string,
      });

      navigate(AppRoutes.application(String(newId)));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ({ field, value }: { field: string; value: string }) => {
    const error = validateField(field, value);
    setForm((prev) => ({ ...prev, [field]: { value, error, touched: true } }));
    return error;
  };

  const title =
    [form.jobTitle.value, form.company.value]
      .filter((item) => item)
      .join(", ") || "New application";

  const isDisabledSubmitButton = disabledSubmitButton(form);

  return (
    <div className={styles.fromRoot}>
      <Typography
        as="h2"
        type="h2"
        className={clsx({
          [styles.emptyTitle]: !form.jobTitle.value && !form.company.value,
        })}
      >
        {title}
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
        {isEditFormMode ? (
          <Button
            variant="outlined"
            size="large"
            startIcon={<RepeatIcon />}
            disabled={isDisabledSubmitButton}
            type="submit"
            loading={loading}
          >
            Try Again
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            disabled={isDisabledSubmitButton}
            type="submit"
            loading={loading}
          >
            Generate Now
          </Button>
        )}
      </form>
    </div>
  );
};

export default From;
