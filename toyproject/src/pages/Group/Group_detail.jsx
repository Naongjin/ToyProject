import React from "react";
import * as S from "../../styles/Group/styleGroup_detail";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";

const GroupDetail = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>그룹 정보</S.Title>
      </S.Header>

      <S.GroupProfile>
        <S.ProfileImage />
        <S.ProfileImage />
        <S.ProfileImage />
        <S.ProfileImage />
      </S.GroupProfile>

      <S.GroupName>제아페 1팀</S.GroupName>

      <S.ChatInfo>
        <IoMdChatbubbles size={18} />
        <S.ChatCount>15</S.ChatCount>
      </S.ChatInfo>

      <S.Section>
        <S.SectionTitle>프로젝트</S.SectionTitle>
        <S.ProjectCard>
          <S.ProjectImage />
          <S.ProjectText>
            [공모전] 제46회 제일기획 아이디어 페스티벌 공모자 모집
          </S.ProjectText>
        </S.ProjectCard>
      </S.Section>

      <S.Section>
        <S.SectionTitle>파트</S.SectionTitle>
        <S.SectionContent>기획, 촬영</S.SectionContent>
      </S.Section>

      <S.Section>
        <S.SectionTitle>팀원</S.SectionTitle>
        <S.TeamList>
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
        </S.TeamList>
      </S.Section>

      <S.IntroBox>
        안녕하세요, 제일기획 아이디어 페스티벌 삼성카드 부문을 준비하고 있는
        1팀입니다.
      </S.IntroBox>

      <S.CommentSection>
        <S.Comment>
          <S.CommentAuthor>이동진</S.CommentAuthor>
          <S.CommentDate>2025.03.02</S.CommentDate>
          <S.CommentText>
            혹시 해당 공모전 언제까지 진행하는지 알 수 있을까요?
          </S.CommentText>
        </S.Comment>

        <S.InputWrapper>
          <S.Input placeholder="댓글을 입력하세요." />
          <S.SendButton>➤</S.SendButton>
        </S.InputWrapper>
      </S.CommentSection>
    </S.Container>
  );
};

export default GroupDetail;
