import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "../../styles/Group/styleMy_group_detail";

const MyGroupDetail = () => {
  return (
    <S.Container>
      {/* 헤더 */}
      <S.Header>
        <S.BackButton onClick={() => window.history.back()}>
          <IoIosArrowBack size={20} />
        </S.BackButton>
        <S.Title>그룹 정보</S.Title>
      </S.Header>

      {/* 프로필 + 좋아요·댓글 */}
      <S.Wrapper>
        <S.Box />
        <S.GroupProfile>
          <S.ProfileImage />
          <S.ProfileImage />
          <S.ProfileImage />
          <S.ProfileImage />
        </S.GroupProfile>
      </S.Wrapper>

      {/* 그룹명 */}
      <S.GroupName>제아페 1팀</S.GroupName>

      {/* 메타 정보 */}
      <S.MetaList>
        <S.MetaItem>
          <S.MetaLabel>프로젝트 유형</S.MetaLabel>
          <S.MetaValue>공모전</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaLabel>프로젝트 분야</S.MetaLabel>
          <S.MetaValue>광고</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaLabel>프로젝트 대상</S.MetaLabel>
          <S.MetaValue>대학생(학부)</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaLabel>파트</S.MetaLabel>
          <S.MetaValue>기획, 촬영</S.MetaValue>
        </S.MetaItem>
      </S.MetaList>

      {/* 팀원 */}
      <S.Section3>
        <S.SectionTitle>팀원</S.SectionTitle>
        <S.TeamList>
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
        </S.TeamList>
      </S.Section3>

      {/* 진행률 */}
      <S.ProgressWrapper>
        <S.SectionTitle style={{ margin: "24px 33px" }}>진행률</S.SectionTitle>
        <S.ProgressSection>
          <S.ProgressPercent>48%</S.ProgressPercent>
          <S.ProgressBar style={{ margin: "0 33px" }}>
            <S.ProgressFill style={{ width: "48%" }} />
          </S.ProgressBar>
        </S.ProgressSection>
        <S.ProgressStage>입력</S.ProgressStage>
      </S.ProgressWrapper>
    </S.Container>
  );
};

export default MyGroupDetail;
