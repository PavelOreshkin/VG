import styles from "./styles.module.css";
import clsx from "clsx";
import Button from "@/shared/ui/Button";
import CopyIcon from "@icons/copy.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import Typography from "@/shared/ui/Typography";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";
import { useApplicationStore } from "../../model";

type ApplicationCardProps = {
  id?: string;
  fullHeight?: boolean;
  content?: string;
  loading?: boolean;
  canRemove?: boolean;
  className?: string;
};

const ApplicationCard = ({
  id,
  content,
  fullHeight,
  loading,
  canRemove = true,
  className,
}: ApplicationCardProps) => {
  const navigate = useNavigate();
  const { removeApplication } = useApplicationStore();

  const handleOpenCard = () => {
    if (!id) return;
    navigate(AppRoutes.application(id));
  };

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!content) return;
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!id) return;
    e.stopPropagation();
    removeApplication(id);
  };

  console.log("content: ", content);

  return (
    <section
      className={clsx(
        styles.root,
        {
          [styles.rootFullHeight]: fullHeight,
        },
        className
      )}
      onClick={handleOpenCard}
    >
      {loading && (
        <div className={styles.loaderWrap}>
          <div className={styles.loader} />
          <div className={styles.loaderBlur} />
        </div>
      )}
      {!loading && (
        <>
          <div
            className={clsx(styles.content, {
              [styles.contentFullHeight]: fullHeight,
            })}
          >
            <Typography as="pre">{content}</Typography>
            {!fullHeight && <div className={styles.fade} />}
          </div>
          <div className={styles.actions}>
            {canRemove && (
              <Button
                variant="text"
                startIcon={<TrashIcon />}
                onClick={handleRemove}
              >
                Delete
              </Button>
            )}
            <div />
            <Button variant="text" endIcon={<CopyIcon />} onClick={handleCopy}>
              Copy to clipboard
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default ApplicationCard;
