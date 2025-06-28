import React from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/styleLogIn";

const LogIn = () => {
  const navigate = useNavigate();
  const GoSignUp = () => {
    navigate(`/SignUp_agree`);
  };
  const GoProject = () => {
    navigate(`/Project`);
  };
  return (
    <L.Container>
      <L.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/Header.png`}
          alt="Header"
          width="345px"
          height="27px"
        ></img>
      </L.Header>

      <img
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="logo"
        width="173.695px"
        height="79px"
        aspect-ratio="173.70/79.00"
      ></img>

      <L.Text>아이디</L.Text>
      <L.Box id="IDBox"></L.Box>
      <L.Text>비밀번호</L.Text>
      <L.Box id="PWBox"></L.Box>
      <L.Btn id="SIBtn" onClick={GoProject}>
        로그인
      </L.Btn>
      <L.Btn id="SUBtn" onClick={GoSignUp}>
        회원가입
      </L.Btn>
    </L.Container>
  );
};

export default LogIn;
