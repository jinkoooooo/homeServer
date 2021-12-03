import React, {useState} from "react";
import styled from "styled-components/macro";
import {NavLink} from "react-router-dom";

import {
    Button,
    CardActions,
    CardContent,
    Grid,
    Link,
    Breadcrumbs as MuiBreadcrumbs,
    Card as MuiCard,
    CardHeader as MuiCardHeader,
    CardMedia as MuiCardMedia,
    Divider as MuiDivider,
    Typography,
} from "@material-ui/core";
import {spacing} from "@material-ui/system";
import {Helmet} from "react-helmet";
import {StarBorder as StarIcon} from "@material-ui/icons";
import {OperModal} from "./OperModal";
import {Operation} from "../../model/Operation";
import {LoadingProgressBar} from "../../components/ProgressBar";
import {useTypedSelector} from "../../redux/reducers";

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
  background-image: url("/images/mcb2.jpg");
`;

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)};
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
`;

function Mandarin() {
    const [operModalFlag, setOperModalFlag] = useState(false);

    const pageState = useTypedSelector(state => state.pageState);

    return (
        <React.Fragment>
            <Helmet title="Mandarin"/>
            <Typography variant="h3" gutterBottom display="inline">
                서귀포감귤
            </Typography>

            <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                <Link component={NavLink} to="/Shopping">
                    Shopping
                </Link>
                <Typography>서귀포감귤</Typography>
            </Breadcrumbs>

            <Divider my={6}/>

            <Header>
                <Typography variant="h3" gutterBottom align="center">
                    제주도 서귀포 감귤
                </Typography>

                <Typography variant="subtitle1" gutterBottom align="center">
                    제주도에서 저희 부모님이 직접 재배하신 달달한 당도 최강 ♥감귤♥
                </Typography>
                <Typography variant="subtitle1" gutterBottom align="center">
                    2021.11월 ~ 2022.01월 까지 절찬리 판매합니다.★
                </Typography>
                <Typography variant="subtitle1" gutterBottom align="center">
                    - ↓↓ 아래에서 원클릭 구매하시면 개별 연락 드립니다. ↓↓ -
                </Typography>
            </Header>

            <Grid container justify="center">
                <Grid item xs={12} lg={10}>
                    <Grid container spacing={6} alignItems="flex-end">
                        <Grid item xs={12} md={6}>
                            <Card p={5}>
                                <CardActions>
                                    <Button fullWidth variant="contained" color="primary"
                                            onClick={() => {
                                                setOperModalFlag(true)
                                            }}>
                                        구매하기
                                    </Button>
                                </CardActions>
                                <CardHeader
                                    title="서귀포감귤"
                                    subheader="새콤달콤 유기농(산지직송)"
                                    titleTypographyProps={{align: "center"}}
                                    subheaderTypographyProps={{align: "center"}}
                                    action={<StarIcon/>}
                                    pb={0}
                                    pt={2}
                                />
                                <CardContent>
                                    <Price>
                                        <Typography
                                            component="h2"
                                            variant="h1"
                                            color="textPrimary"
                                            align="center"
                                            display="inline"
                                        >
                                            ₩ 25,000
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="textSecondary"
                                            align="center"
                                            display="inline"
                                        >
                                            /원
                                        </Typography>
                                    </Price>
                                    <Typography variant="subtitle1" align="center">
                                        1 Box : 10 Kg
                                        <br/>
                                        Size : Medium(중간), 어린아이 주먹크기
                                        <br/>
                                        평균 배송일 3일 소요.
                                        <br/>
                                        (제주도 기상 날씨에 따라 다를 수 있습니다.)
                                        <br/>
                                        문의 : 카톡 id: 3buy3
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card p={8}>
                                <CardContent>
                                    <CardMedia
                                        image={"/Mandarin.jpg"}
                                        title="Contemplative Reptile"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <OperModal
                title="주문서 작성"
                OperationData={new Operation()}
                onSubmit={() => setOperModalFlag(false)}
                onClose={() => setOperModalFlag(false)}
                open={operModalFlag}
            />
            <LoadingProgressBar isOpen={pageState.isLoading}/>
        </React.Fragment>
    );
}

export default Mandarin;
