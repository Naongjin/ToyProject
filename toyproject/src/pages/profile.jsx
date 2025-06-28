import React from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/styleProfile";
const Profile = () => {
  const navigate = useNavigate();
  const GoEdit = () => {
    navigate(`/Profile_edit`);
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
        <P.PText>마이</P.PText>
      </P.Header>
      <P.ProfileBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/Profile.svg`}
          alt="Profile"
        ></img>
        <P.LogIn>
          <P.LogIn_please></P.LogIn_please>
          로그인 하고 지금 바로
          <br />
          프로젝트에 참여해 보세요!
        </P.LogIn>
      </P.ProfileBox>
      <P.Edit onClick={GoEdit}>프로필 수정</P.Edit>
      <P.Stories>
        활동내역
        <P.StoriesBox>
          <P.Story>내 그룹</P.Story>
          <P.Story>찜</P.Story>
          <P.Story>스크랩</P.Story>
        </P.StoriesBox>
      </P.Stories>
      <P.Navigate>
        <P.NProject>
          <img
            width="26.942px"
            height="26.942px"
            alt="Projedt"
            src={`${process.env.PUBLIC_URL}/images/Navigate/Project.svg`}
          />
          프로젝트
        </P.NProject>
        <P.NSearch>
          <img
            width="26.954px"
            height="27px"
            alt="Projedt"
            src={`${process.env.PUBLIC_URL}/images/Navigate/Search.svg`}
          />
          팀원찾기
        </P.NSearch>
        <P.NHome>
          <img
            width="25px"
            height="27px"
            alt="Projedt"
            src={`${process.env.PUBLIC_URL}/images/Navigate/Home.svg`}
          />
          홈
        </P.NHome>
        <P.NGroup>
          <img
            width="30px"
            height="27px"
            alt="Projedt"
            src={`${process.env.PUBLIC_URL}/images/Navigate/Group.svg`}
          />
          그룹
        </P.NGroup>
        <P.NMy>
          <img
            width="27px"
            height="27.064px"
            alt="Projedt"
            src={`${process.env.PUBLIC_URL}/images/Navigate/My.svg`}
          />
          마이
        </P.NMy>
      </P.Navigate>
    </P.Container>
  );
};
export default Profile;
