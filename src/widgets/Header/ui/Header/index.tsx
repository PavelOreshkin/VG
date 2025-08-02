import LogoIcon from "@icons/logo-icon.svg";
import LogoLabel from "@icons/logo-label.svg";

import styles from "./styles.module.css";
import clsx from "clsx";
import Progress from "@/shared/ui/Progress";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <img src={LogoIcon} alt="logo icon" />
        <img src={LogoLabel} alt="logo label" />
      </div>
      <div className={styles.rightSide}>
        <p>3/5 applications generated</p>
        <Progress className={styles.progressWrap} total={5} filled={2} />
      </div>
    </header>
  );
};

export default Header;
