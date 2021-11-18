import React, {ReactNode, useCallback, useEffect, useState} from "react";
import {
    Button as MuiButton,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider as MuiDivider,
    Paper as MuiPaper,
    TextField,
    Grid,
    Typography,
    NativeSelect, Dialog
} from "@material-ui/core";
import {useForm} from "react-hook-form";

import styled from "styled-components/macro";
import {spacing} from "@material-ui/system";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {TransactionSnackbar, TransactionSnackbarPropType} from "../../components/snackbar/TransactionSnackbar";
import {Operation} from "../../model/Operation";
import {OperApi} from "../../api/OperApi";
import DaumPostcode from 'react-daum-postcode';
import {setCurrentPageState} from "../../redux/reducers/pageStore";


const useStyles = makeStyles((theme) => ({
    searchWidth: {
        width: "200px"
    }
}));

type OperModal = {
    title: string,
    OperationData: Operation,
    onSubmit: () => void
    onClose: () => void
    open: boolean
};

const Button = styled(MuiButton)(spacing);
const Paper = styled(MuiPaper)(spacing);

export function OperModal(props: OperModal) {
    const {OperCreate} = OperApi();

    //snackbar
    const [snackbarState, setSnackbarState] = useState<TransactionSnackbarPropType>({
        open: false,
        message: "",
        type: "success",
        duration: 3000
    });

    const [errorSnackbarState, setErrorSnackbarState] = useState<TransactionSnackbarPropType>({
        open: false,
        message: "",
        type: "error",
        duration: null
    });

    const snackBarClose = useCallback(() => {
        setSnackbarState({...snackbarState, open: false})
    }, [snackbarState])

    const errorSnackBarClose = useCallback(() => {
        setErrorSnackbarState({...errorSnackbarState, open: false})
    }, [errorSnackbarState])

    const [boxQty, setBoxQty] = useState(0);

    const dispatcher = useDispatch();


    const {register, reset, watch, errors, setValue, setError, clearError, handleSubmit} = useForm();

    const onSubmit = handleSubmit(({name, address, addressDetail, phoneNo, operQty}) => {

        let patternPhone = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
        let nameCheck = /^[가-힣]+$/;

        if (!nameCheck.test(name)) {
            alert('이름을 확인 해주세요');
            return;
        }

        address += ", " + addressDetail;

        if (phoneNo.length === 11) {
            phoneNo = phoneNo.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }
        if (phoneNo.length === 13) {
            phoneNo = phoneNo.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }


        if (!patternPhone.test(phoneNo)) {
            alert('핸드폰 번호를 확인 해주세요');
            return;
        }

        let createOper: Operation = new Operation(name, address, phoneNo, operQty);

        let operMessage = "\n이름 : " + name + "\n폰번호 : " + address + "\n주소 : " + phoneNo + "\n수량 : " + operQty

        // loading 플레그 변경
        dispatcher(setCurrentPageState({isLoading: true}));

        OperCreate(createOper)
            .then(res => {
                console.log(res);
                if (res.data != null) {
                    alert('주문완료' + operMessage + "\n주문번호 : " + res.data);
                } else {
                    alert('주문실패 - ' + res);
                }
            })
            .catch(err => {
                alert('주문실패 - ' + err);
                console.log(err);
            }).finally(() => {
            // loading 플레그 변경
            dispatcher(setCurrentPageState({isLoading: false}));
        });

        close();
    });


    const close = () => {
        if (props.onClose)
            props.onClose();
    }

    const classes = useStyles();


    // DaumPostCode
    const [isDaumPost, setIsDaumPost] = useState(false);

    const width = 595;
    const height = 450;
    const modalStyle = {
        position: "absolute",
        top: 0,
        left: "-178px",
        zIndex: "100",
        border: "1px solid #000000",
        overflow: "hidden"
    }

    const handleOpenPost = () => {
        setIsDaumPost(!isDaumPost);
    }

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

        props.OperationData.address = fullAddress;
        handleOpenPost();
    }

    return (
        <>
            <TransactionSnackbar
                {...snackbarState}
                handleClose={snackBarClose}
            />

            <Dialog open={props.open}>
                <TransactionSnackbar
                    {...errorSnackbarState}
                    handleClose={errorSnackBarClose}
                />
                <form onSubmit={onSubmit}>
                    <DialogTitle>
                        <Typography gutterBottom>{props.title}</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container item xs={12} spacing={1} justify="flex-start">

                            {
                                isDaumPost ?
                                    <Grid item xs={12} sm={12}>
                                        <DaumPostcode
                                            onComplete={handleComplete}
                                            autoClose
                                            width={width}
                                            height={height}
                                        />
                                    </Grid>
                                    :
                                    <>
                                        <Grid item xs={4} sm={4}>
                                            <label>배송 주소</label>
                                        </Grid>
                                        <Grid item xs={8} sm={8}>
                                            <TextField
                                                id="address"
                                                name="address"
                                                variant="outlined"
                                                inputRef={register}
                                                value={props.OperationData.address}
                                                required={true}
                                                size="small"
                                                className={classes.searchWidth}
                                                multiline
                                                rows={2}
                                                onClick={handleOpenPost}
                                                aria-readonly={true}
                                            />
                                        </Grid>
                                        <Grid item xs={4} sm={4}>
                                            <label>상세 주소</label>
                                        </Grid>
                                        <Grid item xs={8} sm={8}>
                                            <TextField
                                                id="addressDetail"
                                                name="addressDetail"
                                                variant="outlined"
                                                inputRef={register}
                                                required={false}
                                                size="small"
                                                className={classes.searchWidth}
                                                multiline
                                            />
                                        </Grid>
                                    </>

                            }

                            <Grid item xs={4} sm={4}>
                                <label>주문자 명</label>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <TextField
                                    id="name"
                                    name="name"
                                    variant="outlined"
                                    inputRef={register}
                                    required={true}
                                    defaultValue={props.OperationData.name}
                                    size="small"
                                    className={classes.searchWidth}
                                    multiline
                                    /*onChange={(event) => {
                                        props.OperationData.name = event.target.value;
                                    }}*/
                                />
                            </Grid>

                            <Grid item xs={4} sm={4}>
                                <label>폰번호</label>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <TextField
                                    id="phoneNo"
                                    name="phoneNo"
                                    variant="outlined"
                                    inputRef={register}
                                    required={true}
                                    defaultValue={props.OperationData.phoneNo}
                                    size="small"
                                    className={classes.searchWidth}
                                    multiline
                                />
                            </Grid>

                            <Grid item xs={4} sm={4}>
                                <label>주문 수량</label>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <TextField
                                    id="operQty"
                                    name="operQty"
                                    variant="outlined"
                                    inputRef={register}
                                    required={true}
                                    defaultValue={props.OperationData.operQty}
                                    size="small"
                                    className={classes.searchWidth}
                                    multiline
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    {
                        isDaumPost ?
                            <DialogActions>
                                <Button onClick={handleOpenPost} color="primary">닫기</Button>
                            </DialogActions>
                            :
                            <DialogActions>
                                <Button type="submit" color="primary">주문</Button>
                                <Button onClick={close} color="primary">취소</Button>
                            </DialogActions>
                    }
                </form>
            </Dialog>

        </>
    );
}