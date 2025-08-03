import Button from "@/shared/ui/Button";
import CopyIcon from "@icons/copy.svg?react";
import { useMobile } from "@/shared/lib/mobile/useMobile";
import { copy } from "../api/copy";

type ClipboardCopyProps = {
  content?: string;
};

const ClipboardCopy = ({ content }: ClipboardCopyProps) => {
  const isMobile = useMobile();

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    copy(content);
  };

  const iconSize = isMobile ? 16 : 20;

  return (
    <Button
      variant="text"
      endIcon={<CopyIcon height={iconSize} width={iconSize} />}
      onClick={handleCopy}
      aria-label="copy"
    >
      Copy to clipboard
    </Button>
  );
};

export default ClipboardCopy;
