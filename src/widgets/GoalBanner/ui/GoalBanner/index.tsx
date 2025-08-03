import Typography from "@/shared/ui/Typography";
import styles from "./styles.module.css";
import PlusIcon from "@icons/plus.svg?react";
import Button from "@/shared/ui/Button";
import Progress from "@/shared/ui/Progress";
import { useApplicationStore } from "@/entities/application/model";
import { useNavigate } from "react-router-dom";
import { APPLICATIONS_MAX_COUNT } from "@/shared/constants";
import { AppRoutes } from "@/shared/routes";

const GoalBanner = () => {
  const navigate = useNavigate();
  const { applications } = useApplicationStore();

  const handleGoToCreatePage = () => {
    navigate(AppRoutes.CREATE_APPLICATION);
  };

  if (applications.length >= APPLICATIONS_MAX_COUNT) {
    return null;
  }

  return (
    <div className={styles.goalBannerRoot}>
      <div className={styles.content}>
        <Typography as="h2" type="h2" className={styles.title}>
          Hit your goal
        </Typography>
        <Typography className={styles.description}>
          Generate and send out couple more job applications today to get hired
          faster{" "}
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlusIcon height={24} width={24} />}
          className={styles.button}
          onClick={handleGoToCreatePage}
          aria-label="create new"
        >
          Create New
        </Button>
        <Progress
          filled={applications.length}
          total={APPLICATIONS_MAX_COUNT}
          shape="long"
          withDescription
          className={styles.progress}
        />
      </div>
    </div>
  );
};

export default GoalBanner;
