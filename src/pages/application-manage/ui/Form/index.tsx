import styles from "./styles.module.css";
import Typography from "@/shared/ui/Typography";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Textarea from "@/shared/ui/Textarea";
import RepeatIcon from "@icons/repeat.svg?react";

const MOCK_CONTENT =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ullam velit temporibus dolore hic eius. Perferendis quam vitae eveniet in sed, libero excepturi quia voluptas illum odio, animi facilis molestiae? Similique consequatur doloribus iure vitae, voluptas aut ipsa ex et quo, dicta laborum exercitationem nobis corporis error in corrupti praesentium aspernatur? Voluptas a maxime sunt veniam voluptatibus reprehenderit vel fugit tempore quae corporis ex facere ducimus porro modi quam non nostrum eos vitae delectus ea, at quo asperiores nam dolorem. Aliquid omnis nam molestias odit cumque ad sed nihil est consequuntur, quo reiciendis laborum impedit non, rerum eligendi inventore dolores autem! Veritatis officia animi, voluptas aut optio nihil eveniet obcaecati minima nobis dolorum, magni commodi maiores. Natus quia accusantium a aliquam eum, exercitationem veritatis labore deleniti repudiandae quibusdam laborum corporis mollitia dolorem illo itaque! Soluta modi cupiditate nisi velit accusamus eos quam. Ad voluptas blanditiis natus eaque incidunt reprehenderit quibusdam reiciendis assumenda, amet odit voluptatem quod corporis ipsa animi possimus. Omnis optio, molestias nulla fugiat ut doloribus reiciendis nihil consequuntur praesentium, ad minima nobis harum animi perferendis quam expedita nisi repellat debitis ratione consequatur? Repudiandae praesentium provident dolore veniam suscipit, et vel nobis consequatur perferendis, voluptas labore ab possimus laudantium?";

const From = () => {
  const isGenerated = false;
  return (
    <div className={styles.fromRoot}>
      <Typography as="h2" type="h2">
        Product manager, Apple
      </Typography>
      <div className={styles.divider} />
      <form action="submit" className={styles.from}>
        <div className={styles.row}>
          <Input label="Job title" value="Product manager" />
          <Input label="Company" value="Apple" /* errorText="required" */ />
        </div>
        <Input label="I am good at..." />
        <Textarea
          label="Additional details"
          value={MOCK_CONTENT}
          maxLength={1200}
        />
        {isGenerated ? (
          <Button variant="outlined" size="large" startIcon={<RepeatIcon />}>
            Try Again
          </Button>
        ) : (
          <Button variant="contained" size="large">
            Generate Now
          </Button>
        )}
      </form>
    </div>
  );
};

export default From;
