import { useState } from "react";

interface UseDialogProps {
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDialog = ({ onOpen, onClose }: UseDialogProps) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    onOpen?.();
    setOpen(true);
  };
  const handleClose = () => {
    onClose?.();
    setOpen(false);
  };
  const props = {
    open,
    handleClose
  };
  return { openDialog, props };
};
