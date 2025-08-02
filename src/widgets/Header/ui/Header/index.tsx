import clsx from "clsx";
import LogoIcon from "@icons/logo-icon.svg?react";
import LogoLabel from "@icons/logo-label.svg?react";
import Progress from "@/shared/ui/Progress";
import Typography from "@/shared/ui/Typography";
import HomeIcon from "@icons/home.svg?react";
import CheckIcon from "@icons/check.svg?react";
import Button from "@/shared/ui/Button";
import styles from "./styles.module.css";

const Header = () => {
  const isFull = true;
  // const isFull = false;
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <LogoIcon />
        <LogoLabel />
      </div>
      <div className={styles.rightSide}>
        <Typography className={styles.description}>
          3/5 applications generated
        </Typography>
        <div className={styles.progress}>
          {isFull ? <CheckIcon /> : <Progress total={5} filled={2} />}
        </div>
        <Button
          variant="outlined"
          size="small"
          startIcon={<HomeIcon />}
          className={styles.button}
        />
      </div>
    </header>
  );
};

export default Header;
