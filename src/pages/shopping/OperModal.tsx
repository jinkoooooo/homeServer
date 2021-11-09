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

    const dispatcher = useDispatch();


    const {register, reset, watch, errors, setValue, setError, clearError, handleSubmit} = useForm();
    const onSubmit = handleSubmit(({startDateTime, arriveDateTime, startOdometer, arriveOdometer}) => {

        confirm(null);
        close();
    });

    useEffect(() => {

    }, []);


    const confirm = (drivingLogPost: any) => {

    }

    const close = () => {
        if (props.onClose)
            props.onClose();
    }

    const classes = useStyles();

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
                                />
                            </Grid>

                            <Grid item xs={4} sm={4}>
                                <label>배송 주소</label>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <TextField
                                    id="address"
                                    name="address"
                                    variant="outlined"
                                    inputRef={register}
                                    required={true}
                                    defaultValue={props.OperationData.address}
                                    size="small"
                                    className={classes.searchWidth}
                                />
                            </Grid>

                            <Grid item xs={4} sm={4}>
                                <label>주문자 명</label>
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
                                />
                            </Grid>

                            <Grid item xs={4} sm={4}>
                                <label>주문자 명</label>
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
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>
                        <Button type="submit" color="primary">주문</Button>
                        <Button onClick={close} color="primary">취소</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}