import React, {Component, useEffect} from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import KakaoLoginImg from '../../components/kakao/kakao_login_small.png';
import {setCurrentUserInfo, UserAuth, userLogout} from "../../redux/reducers/authStore";
import {AuthData} from "../../model/User";
import {useDispatch} from "react-redux";
import {boolean} from "yup";

const ButtonWrap = Styled.div`
  background-repeat: no-repeat;
  margin: auto;
  color: transparent;
  width: 60px;
  height: 30px;
`;


const KakaoLogOut = () => {
    const dispatcher = useDispatch();

    useEffect(() => {
        if(!window.Kakao.isInitialized()){
            window.Kakao.init(process.env.REACT_APP_KAKAO);
        }
    }, []);

    const logOutWithKakao = () => {
        try {
            return new Promise((resolve, reject) => {
                if (!window.Kakao) {
                    reject('인스턴스 없음');
                }
                window.Kakao.Auth.logout(function() {
                    dispatcher(
                        userLogout()
                    );
                });
            });
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <ButtonWrap onClick={logOutWithKakao}>Log Out</ButtonWrap>
    );
};

export default KakaoLogOut;