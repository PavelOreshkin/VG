import { ApplicationCard } from "@/entities/application";
import styles from "./styles.module.css";
import { GoalBanner } from "@/widgets/GoalBanner";
import { useMemo, useState } from "react";
import { useApplicationStore } from "@/entities/application/model";
import { ApplicationForm } from "@/features/application-form";
import { sendPrompt } from "@/entities/AI";
import Button from "@/shared/ui/Button";
import { useParams } from "react-router-dom";

const INITIAL_VALUE = "Your personalized job application will appear here...";

const ApplicationManage = () => {
  const { id } = useParams();
  const {
    applications,
    loading,
    addApplication,
    updateApplication,
    removeApplication,
    getApplication,
  } = useApplicationStore();
  console.log("applications: ", applications);

  const content = useMemo(() => {
    if (!id) return INITIAL_VALUE;
    const application = getApplication(id);
    return application?.text;
  }, [id]);

  return (
    <div className={styles.applicationManageRoot}>
      <div className={styles.row}>
        <ApplicationForm />
        <ApplicationCard
          loading={loading}
          content={content}
          fullHeight
          className={styles.card}
        />
      </div>
      <GoalBanner />
    </div>
  );
};

export default ApplicationManage;
