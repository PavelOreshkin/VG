import { ApplicationCard } from "@/entities/application";
import styles from "./styles.module.css";
import { GoalBanner } from "@/widgets/GoalBanner";
import { useState } from "react";
import { useApplicationStore } from "@/entities/application/model";
import { ApplicationForm } from "@/features/application-form";

const INITIAL_VALUE = "Your personalized job application will appear here...";

const ApplicationManage = (args) => {
  console.log("args: ", args);
  const {
    applications,
    addApplication,
    updateApplication,
    removeApplication,
    getApplication,
  } = useApplicationStore();
  console.log("applications: ", applications);

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(INITIAL_VALUE);

  const handleSubmit = () => {
    const xxx = getApplication(1754208016136);
    console.log("xxx: ", xxx);

    setLoading(true);
    setTimeout(() => {
      setContent(MOCK_CONTENT);
      setLoading(false);
    }, 2000);
  };

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
