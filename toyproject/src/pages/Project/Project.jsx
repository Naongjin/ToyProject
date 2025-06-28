import React from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../../styles/Project/styleProject";
const Project = () => {
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
      />
      <P.Header>
        <P.BackBtn
          src={`${process.env.PUBLIC_URL}/images/BackBtn.svg`}
          alt="뒤로가기"
        />
        <P.PText>프로젝트</P.PText>
        <img src={`${process.env.PUBLIC_URL}/images/Edit.svg`} />
      </P.Header>
      <P.ProjectContainer>
        <P.Search></P.Search>
        <P.CategoryBox>
          <P.Category>전체</P.Category>
          <P.Category>조별과제</P.Category>
          <P.Category>공모전/대회</P.Category>
          <P.Category>대외활동</P.Category>
          <P.Category>기타</P.Category>
        </P.CategoryBox>
        <P.Text>3개의 게시물</P.Text>
        <P.ProjectBox>
          <P.PJImg>
            <P.PJ>
              <P.PJName></P.PJName>
              <P.PJDetail></P.PJDetail>
              <img
                src={`${process.env.PUBLIC_URL}/images/PJ_Comment.svg`}
                width="17px"
                height="22px"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/PJ_Like.svg`}
                width="18px"
                height="18px"
              />
            </P.PJ>
          </P.PJImg>
        </P.ProjectBox>
      </P.ProjectContainer>
    </P.Container>
  );
};
export default Project;
