import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { ApplicationCard } from "@/entities/application";
import { GoalBanner } from "@/widgets/GoalBanner";
import { useApplicationStore } from "@/entities/application/model";
import { ApplicationForm } from "@/features/application-form";

const INITIAL_VALUE = "Your personalized job application will appear here...";

const ApplicationManage = () => {
  const { id } = useParams();
  const { loading, getApplication } = useApplicationStore();

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
