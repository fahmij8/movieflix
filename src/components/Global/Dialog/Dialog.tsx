import { ReactNode, forwardRef } from "react";
import DialogMUI from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogProps {
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
}

export function Dialog({ handleClose, open, children, title }: DialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <DialogMUI
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="md"
      >
        <DialogTitle>{title}</DialogTitle>
        {children}
      </DialogMUI>
    </div>
  );
}
