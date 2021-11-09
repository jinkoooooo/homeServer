import React, {useState, useEffect} from 'react';
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import {
  Snackbar
} from "@material-ui/core";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

/** prop type **/
export type TransactionSnackbarPropType = {
  open: boolean
  type: "error" | "info" | "success"
  message: string
  duration?: number | null
  handleClose?: () => void
};

export function TransactionSnackbar(props: TransactionSnackbarPropType) {
  const [state, setState] = useState<TransactionSnackbarPropType>({
    ...props
  });

  const {open, type, message, duration, handleClose} = state;

  useEffect(() => {
    setState({...state, ...props})
  }, [props])

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}