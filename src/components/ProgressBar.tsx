import React from 'react';
import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CircularProgress as MuiCircularProgress,
  Divider as MuiDivider,
  LinearProgress as MuiLinearProgress,
  Paper as MuiPaper,
  Typography,
  ListProps, Theme, createStyles, makeStyles, Backdrop,
} from "@material-ui/core";
import {spacing} from "@material-ui/system";
import styled from "styled-components";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);
const LinearProgress = styled(MuiLinearProgress)(spacing);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);


type LoadingProgressBarProps ={
  isOpen:boolean,
}

export function LoadingProgressBar(props:LoadingProgressBarProps) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.isOpen}>
        <Card mb={6}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Loading...
            </Typography>
            <Paper mt={3}>
              <LinearProgress my={2} color="secondary" />
            </Paper>
          </CardContent>
        </Card>
      </Backdrop>
    </div>
  );
}