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
          안녕하세요. 멋진구의 프로필 및 포트폴리오 사이트입니다.
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          저는 가람이를 사랑합니다♥
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          얼른 오늘(2021.7.22)이 지나가고 내일이 와서
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>

        </Grid>

        <Grid item xs={12} lg={4}>
          우리 이쁜 가람이를 보러 가고싶습니다.!!!!!ㅎㅎ
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          ♥3♥
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DashBoard;
