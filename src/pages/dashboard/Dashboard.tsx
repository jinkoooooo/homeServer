import React, {useState} from "react";
import styled from "styled-components/macro";


import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography, Link,
} from "@material-ui/core";

import {spacing} from "@material-ui/system";
import {NavLink} from "react-router-dom";


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

            <Divider my={6}/>

            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl>
                    안녕하세요. JingooBell 의 개인 사이트입니다.
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3} xl>
                    현재 귤 판매 이벤트를 진행중에 있습니다.
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3} xl>
                    10Kg 1Box 25000원! 많은 구매 바랍니다.!!!
                </Grid>
            </Grid>

            <Grid container spacing={6}>
                <Grid item xs={12} lg={8}>

                </Grid>

                <Grid item xs={12} lg={4}>
                    Shop 페이지로 이동 후 원클릭 구매요청 가능합니다.
                </Grid>
            </Grid>

            <Grid container spacing={6}>
                <Grid item xs={12} lg={8}>
                    ♥3♥
                </Grid>
            </Grid>

            <Grid container spacing={6}>
                <Grid item xs={12} lg={8}>
                    <Link component={NavLink} to="/Shopping/Mandarin">
                        Shopping 바로가기
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default DashBoard;
