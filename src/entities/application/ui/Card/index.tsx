import styles from "./styles.module.css";
import clsx from "clsx";
import Button from "@/shared/ui/Button";
import CopyIcon from "@icons/copy.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import Typography from "@/shared/ui/Typography";

type ApplicationCardProps = {
  fullHeight?: boolean;
  content?: string;
  className?: string;
};

const ApplicationCard = ({
  content,
  fullHeight,
  className,
}: ApplicationCardProps) => {
  return (
    <section
      className={clsx(
        styles.root,
        {
          [styles.rootFullHeight]: fullHeight,
        },
        className
      )}
    >
      <div
        className={clsx(styles.content, {
          [styles.contentFullHeight]: fullHeight,
        })}
      >
        <Typography>{content}</Typography>
        {!fullHeight && <div className={styles.fade} />}
      </div>
      <div className={styles.actions}>
        <Button variant="text" startIcon={<TrashIcon />}>
          Delete
        </Button>
        <Button variant="text" endIcon={<CopyIcon />}>
          Copy to clipboard
        </Button>
      </div>
    </section>
  );
};

export default ApplicationCard;
