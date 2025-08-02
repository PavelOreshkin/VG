import Button from "@/shared/ui/Button";
import Typography from "@/shared/ui/Typography";
import PlusIcon from "@icons/plus.svg?react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Typography as="h1" type="h1">
          Applications
        </Typography>
        <Button variant="contained" size="medium" startIcon={<PlusIcon />}>
          Create New
        </Button>
      </div>
      <div className={styles.divider} />
    </>
  );
};

export default Header;
