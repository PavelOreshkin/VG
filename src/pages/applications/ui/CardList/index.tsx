import { useApplicationStore } from "@/entities/application/model";
import styles from "./styles.module.css";
import { ApplicationCard } from "@/entities/application";

const CardList = () => {
  const { applications } = useApplicationStore();

  return (
    <div className={styles.applicationCards}>
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          id={application.id}
          content={application.text}
        />
      ))}
    </div>
  );
};

export default CardList;
