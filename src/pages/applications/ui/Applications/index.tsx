import styles from "./styles.module.css";
import Header from "../Header";
import CardList from "../CardList";
import { GoalBanner } from "@/widgets/goal-banner";

const Applications = () => {
  return (
    <div className={styles.applicationsRoot}>
      <Header />
      <CardList />
      <GoalBanner />
    </div>
  );
};

export default Applications;
