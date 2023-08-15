import React, {useState, useEffect} from 'react';
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import {
  Snackbar
} from "@material-ui/core";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

/** prop type **/
export type ResultSnackbarPropType = {
  open: boolean
  type: "error" | "info" | "success"
  message: string
  handleClose?: () => void
};

export function ResultSnackbar(props: ResultSnackbarPropType) {

  useEffect(() => {

  }, [props]);

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.type == "success"? 3000 : null}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert
        onClose={props.handleClose}
        variant="filled"
        severity={props.type}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}