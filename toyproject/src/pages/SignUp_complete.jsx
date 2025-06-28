import React from "react";
import { useNavigate } from "react-router-dom";
import * as SU from "../styles/styleSignUp_complete";
const SignUp_agree = () => {
  const navigate = useNavigate();
  const GoProfile = () => {
    navigate(`/Profile`);
  };
  return (
    <SU.Container>
      <img
        src={`${process.env.PUBLIC_URL}/images/Header.png`}
        alt="Header"
        width="345px"
        height="27px"
      ></img>
      <SU.Header>
        <SU.BackBtn
          src={`${process.env.PUBLIC_URL}/images/BackBtn.svg`}
          alt="뒤로가기"
          width="15"
          height="27"
        />
        <SU.SUText>회원가입</SU.SUText>
      </SU.Header>
      <SU.StatusBar>
        <SU.Status></SU.Status>
      </SU.StatusBar>
      <SU.Step>
        STEP 03
        <br />
        회원가입 완료
      </SU.Step>
      <SU.Congrat>
        <span>
          <SU.C_Name>김솜솜</SU.C_Name>님,
        </span>
        <br />
        가입을 축하드립니다!
      </SU.Congrat>
      <SU.NextBtn onClick={GoProfile}>로그인 하러 가기</SU.NextBtn>
    </SU.Container>
  );
};
export default SignUp_agree;
