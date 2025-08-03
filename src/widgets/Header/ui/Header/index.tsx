import LogoIcon from "@icons/logo-icon.svg?react";
import LogoLabel from "@icons/logo-label.svg?react";
import Progress from "@/shared/ui/Progress";
import Typography from "@/shared/ui/Typography";
import HomeIcon from "@icons/home.svg?react";
import CheckIcon from "@icons/check.svg?react";
import Button from "@/shared/ui/Button";
import styles from "./styles.module.css";
import { useApplicationStore } from "@/entities/application/model";
import { APPLICATIONS_MAX_COUNT } from "@/shared/constants";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";

const Header = () => {
  const navigate = useNavigate();
  const { applications } = useApplicationStore();

  const isFull = applications.length >= APPLICATIONS_MAX_COUNT;
  const filled = applications.length;

  const handleGoHomePage = () => {
    navigate(AppRoutes.APPLICATIONS);
  };

  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <LogoIcon />
        <LogoLabel />
      </div>
      <div className={styles.rightSide}>
        <Typography className={styles.description}>
          {!isFull ? filled : APPLICATIONS_MAX_COUNT}/{APPLICATIONS_MAX_COUNT}{" "}
          applications generated
        </Typography>
        <div className={styles.progress}>
          {isFull ? (
            <CheckIcon />
          ) : (
            <Progress total={APPLICATIONS_MAX_COUNT} filled={filled} />
          )}
        </div>
        <Button
          variant="outlined"
          size="small"
          onClick={handleGoHomePage}
          startIcon={<HomeIcon />}
          className={styles.button}
        />
      </div>
    </header>
  );
};

export default Header;
