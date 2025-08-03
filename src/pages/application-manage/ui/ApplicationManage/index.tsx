import { ApplicationCard } from "@/entities/application";
import styles from "./styles.module.css";
import { GoalBanner } from "@/widgets/GoalBanner";
import From from "../Form";
import { useState } from "react";

const MOCK_CONTENT =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ullam velit temporibus dolore hic eius. Perferendis quam vitae eveniet in sed, libero excepturi quia voluptas illum odio, animi facilis molestiae? Similique consequatur doloribus iure vitae, voluptas aut ipsa ex et quo, dicta laborum exercitationem nobis corporis error in corrupti praesentium aspernatur? Voluptas a maxime sunt veniam voluptatibus reprehenderit vel fugit tempore quae corporis ex facere ducimus porro modi quam non nostrum eos vitae delectus ea, at quo asperiores nam dolorem. Aliquid omnis nam molestias odit cumque ad sed nihil est consequuntur, quo reiciendis laborum impedit non, rerum eligendi inventore dolores autem! Veritatis officia animi, voluptas aut optio nihil eveniet obcaecati minima nobis dolorum, magni commodi maiores. Natus quia accusantium a aliquam eum, exercitationem veritatis labore deleniti repudiandae quibusdam laborum corporis mollitia dolorem illo itaque! Soluta modi cupiditate nisi velit accusamus eos quam. Ad voluptas blanditiis natus eaque incidunt reprehenderit quibusdam reiciendis assumenda, amet odit voluptatem quod corporis ipsa animi possimus. Omnis optio, molestias nulla fugiat ut doloribus reiciendis nihil consequuntur praesentium, ad minima nobis harum animi perferendis quam expedita nisi repellat debitis ratione consequatur? Repudiandae praesentium provident dolore veniam suscipit, et vel nobis consequatur perferendis, voluptas labore ab possimus laudantium?";

const INITIAL_VALUE = "Your personalized job application will appear here...";
const ApplicationManage = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(INITIAL_VALUE);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setContent(MOCK_CONTENT);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.applicationManageRoot}>
      <div className={styles.row}>
        <From />
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
