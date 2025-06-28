import React from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/styleProfile_edit";
const Profile_edit = () => {
  const navigate = useNavigate();
  const GoSignUp = () => {
    navigate(`/SignUp_complete`);
  };
  return (
    <P.Container>
      <img
        src={`${process.env.PUBLIC_URL}/images/Header.png`}
        alt="Header"
        width="345px"
        height="27px"
      ></img>
      <P.Header>
        <P.BackBtn
          src={`${process.env.PUBLIC_URL}/images/BackBtn.svg`}
          alt="뒤로가기"
        />
        <P.PText>프로필 수정</P.PText>
      </P.Header>
      <P.ProfileBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/Profile.svg`}
          alt="Profile"
        ></img>
      </P.ProfileBox>
      <P.Text>이름*</P.Text>
      <P.Box></P.Box>
      <P.Text>성별*</P.Text>
      <P.Box></P.Box>
      <P.Text>나이*</P.Text>
      <P.Box></P.Box>
      <P.Text>거주지*</P.Text>
      <P.Box></P.Box>
      <P.Text>직업*</P.Text>
      <P.Box></P.Box>
      <P.Text>학력</P.Text>
      <P.Box></P.Box>
      <P.Text>전공</P.Text>
      <P.Box></P.Box>
      <P.Text>세부 설명</P.Text>
      <P.TextArea></P.TextArea>
    </P.Container>
  );
};
export default Profile_edit;
