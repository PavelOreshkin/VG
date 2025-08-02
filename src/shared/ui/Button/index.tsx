import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Loader from "@shared/ui/Loader";

type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined";
  color?: "success" | "transparent";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
};

const Button = ({
  loading = false,
  disabled = false,
  variant = "contained",
  color = "transparent",
  size = "medium",
  startIcon,
  endIcon,
  children,
  className,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={clsx(
        styles.buttonRoot,
        styles?.[`${size}Size`],
        styles?.[`${variant}Variant`],
        styles?.[`${color}Color`],
        { [styles.disabled]: disabled },
        { [styles.loading]: loading },
        className
      )}
    >
      {loading && <Loader />}
      {!loading && (
        <div className={styles.content}>
          {startIcon}
          <p>{children}</p>
          {endIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
