import React, {Component, useEffect} from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import KakaoLoginImg from '../../components/kakao/kakao_login_small.png';
import {setCurrentUserInfo, UserAuth, userLogout} from "../../redux/reducers/authStore";
import {AuthData} from "../../model/User";
import {useDispatch} from "react-redux";
import {boolean} from "yup";

const ButtonWrap = Styled.div`
  background-image: url(${KakaoLoginImg});
  background-repeat: no-repeat;
  margin: auto;
  color: transparent;
  width: 60px;
  height: 30px;
`;


const KakaoLogin = () => {
    const dispatcher = useDispatch();

    useEffect(() => {
        if(!window.Kakao.isInitialized()){
            window.Kakao.init(process.env.REACT_APP_KAKAO);
        }
    }, []);

    //사용자 정보를 담아둘 userObj
    const [userObjState, setUserObjState]=React.useState(new AuthData());

    const loginWithKakao = () => {
        try {
            return new Promise((resolve, reject) => {
                if (!window.Kakao) {
                    reject('인스턴스 없음');
                }
                window.Kakao.Auth.login({
                    success: (res: AuthData) => {
                        // 사용자 정보 패치
                        dispatcher(
                            setCurrentUserInfo({
                                isAuth: true,
                                user: res,
                            })
                        );
                    },
                    fail: (err: any) => {
                        console.error(err);
                    },
                });
            });
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <ButtonWrap onClick={loginWithKakao}></ButtonWrap>
    );
};

export default KakaoLogin;