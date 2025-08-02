import Typography from "@/shared/ui/Typography";
import styles from "./styles.module.css";
import PlusIcon from "@icons/plus.svg?react";
import Button from "@/shared/ui/Button";
import Progress from "@/shared/ui/Progress";

const GoalBanner = () => {
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
        >
          Create New
        </Button>
        <Progress
          filled={3}
          total={5}
          shape="long"
          withDescription
          className={styles.progress}
        />
      </div>
    </div>
  );
};

export default GoalBanner;
