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
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  type,
  onClick,
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
      type={type}
      onClick={onClick}
      disabled={disabled}
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

{
  /* 

import Button from "@/shared/ui/Button";
import PlusIcon from "@icons/plus.svg?react";
import RepeatIcon from "@icons/repeat.svg?react";
import HomeIcon from "@icons/home.svg?react";
import CopyIcon from "@icons/copy.svg?react";
import TrashIcon from "@icons/trash.svg?react";

<Button variant="contained" size="large">
  Generate Now
</Button>
<Button variant="contained" size="large" loading>
  Generate Now
</Button>
<Button variant="contained" size="large" disabled>
  Generate Now
</Button>
<Button variant="outlined" size="large" startIcon={<RepeatIcon />}>
  Try Again
</Button>
<Button
  variant="outlined"
  size="large"
  startIcon={<RepeatIcon />}
  disabled
>
  Try Again
</Button>
<Button
  variant="contained"
  size="large"
  startIcon={<PlusIcon height={24} width={24} />}
>
  Create New
</Button>
<Button variant="contained" size="medium" startIcon={<PlusIcon />}>
  Create New
</Button>

<Button variant="outlined" size="small" startIcon={<HomeIcon />} />

<Button variant="text" startIcon={<TrashIcon />}>
  Delete
</Button>
<Button variant="text" endIcon={<CopyIcon />}>
  Copy to clipboard
</Button>
*/
}
