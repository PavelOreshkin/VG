import clsx from "clsx";
import Loading from "@icons/loading.svg";
import styles from "./styles.module.css";

type LoaderProps = {
  className?: string;
};

const Loader = ({ className }: LoaderProps) => {
  return (
    <img
      src={Loading}
      alt="loading"
      className={clsx(styles.loaderRoot, className)}
    />
  );
};

export default Loader;
