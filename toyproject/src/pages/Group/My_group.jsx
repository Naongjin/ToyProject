import React from "react";
import * as S from "../../styles/Group/styleMy_group_detail";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";

const MyGroupDetail = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>그룹 정보</S.Title>
      </S.Header>

      <S.Box />
      <S.Wrapper>
        <S.GroupProfile>
          <S.ProfileImage />
          <S.ProfileImage />
          <S.ProfileImage />
          <S.ProfileImage />
        </S.GroupProfile>
        <S.IconWrapper>
          <S.IconComment
            src={`${process.env.PUBLIC_URL}/images/PJ_Comment.svg`}
          />
          1
          <S.Like src={`${process.env.PUBLIC_URL}/images/PJ_Like.svg`} />
          15
        </S.IconWrapper>
      </S.Wrapper>
      <S.GroupName>제아페 1팀</S.GroupName>

      <S.Section>
        <S.SectionTitle>프로젝트</S.SectionTitle>
        <S.ProjectCard>
          <S.ProjectImage />
          <S.ProjectInfo>
            <S.ProjectText>[공모전] | 제46회 제일기획 ∙∙∙</S.ProjectText>
            <S.ProjectDetail>
              2025년 3월, 제 46회 제일기획 아이디어 페스티벌 공모작을
              모집합니다!
            </S.ProjectDetail>
          </S.ProjectInfo>
        </S.ProjectCard>
      </S.Section>

      <S.Section2>
        <S.SectionTitle>파트</S.SectionTitle>
        <S.SectionContent>기획, 촬영</S.SectionContent>
      </S.Section2>

      <S.Section3>
        <S.SectionTitle>팀원</S.SectionTitle>
        <S.TeamList>
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
        </S.TeamList>
      </S.Section3>

      <S.IntroBox>
        안녕하세요, 제일기획 아이디어 페스티벌 삼성카드 부문을 준비하고 있는
        1팀입니다.
      </S.IntroBox>

      <S.CommentSection>
        <S.Comment>
          <S.CommentAuthor>이동덕</S.CommentAuthor>
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

export default MyGroupDetail;
