import React, {useState} from "react";
import styled from "styled-components/macro";


import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";


const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function DashBoard() {

  return (
    <React.Fragment>
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Dashboard
          </Typography>
        </Grid>

      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          1
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          2
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          3
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          4
        </Grid>

        <Grid item xs={12} lg={4}>
          5
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          6
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DashBoard;
