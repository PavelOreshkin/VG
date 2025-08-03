import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { GoalBanner } from "@/widgets/goal-banner";
import { useApplicationStore } from "@/entities/application";
import { ApplicationForm } from "@/features/application-form";
import { ApplicationCard } from "@/widgets/application-card";

const INITIAL_CARD_CONTENT =
  "Your personalized job application will appear here...";

const ApplicationManage = () => {
  const { id } = useParams();
  const { loading, getApplication } = useApplicationStore();

  const content = useMemo(() => {
    if (!id) return INITIAL_CARD_CONTENT;
    const application = getApplication(id);
    return application?.text;
  }, [id, loading]);

  return (
    <div className={styles.applicationManageRoot}>
      <div className={styles.content}>
        <ApplicationForm />
        <ApplicationCard
          loading={loading}
          content={content}
          canRemove={false}
          fullHeight
          className={styles.card}
        />
      </div>
      <GoalBanner />
    </div>
  );
};

export default ApplicationManage;
