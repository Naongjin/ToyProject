import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdChatbubbles, IoIosBookmark } from "react-icons/io";
import * as S from "../../styles/Project/styleProject_detail";

const ProjectDetail = () => {
  // 예시 데이터
  const project = {
    image: `${process.env.PUBLIC_URL}/images/project.png`,
    title: "2025 국가유산 재난안전 공모전",
    meta: [
      { label: "프로젝트 유형", value: "공모전" },
      { label: "프로젝트 분야", value: "광고·홍보" },
      { label: "프로젝트 대상", value: "국민 누구나" },
      { label: "주최", value: "국가유산청" },
      { label: "공모기간", value: "2024.11.25~12.31" },
      { label: "사이트", value: "페이지 바로가기" },
    ],
    commentCount: 1,
    bookmarkCount: 9,
    comments: [
      {
        author: "김멋사",
        date: "2025.03.02",
        text: "인원 수에 제한이 있을까요..?",
      },
    ],
  };

  return (
    <S.Container>
      {/* 헤더 */}
      <S.Header>
        <S.BackButton onClick={() => window.history.back()}>
          <IoIosArrowBack size={24} />
        </S.BackButton>
        <S.Title>프로젝트 상세</S.Title>
      </S.Header>

      {/* 프로젝트 이미지 */}
      <S.Image src={project.image} alt="프로젝트" />

      {/* 아이콘(댓글·북마크) */}
      <S.IconRow>
        <IoMdChatbubbles size={18} />
        <S.IconCount>{project.commentCount}</S.IconCount>
        <IoIosBookmark size={18} />
        <S.IconCount>{project.bookmarkCount}</S.IconCount>
      </S.IconRow>

      {/* 프로젝트 제목 */}
      <S.ProjectTitle>{project.title}</S.ProjectTitle>

      {/* 메타 정보 */}
      <S.MetaList>
        {project.meta.map((item) => (
          <S.MetaItem key={item.label}>
            <S.MetaLabel>{item.label}</S.MetaLabel>
            <S.MetaValue>{item.value}</S.MetaValue>
          </S.MetaItem>
        ))}
      </S.MetaList>

      {/* 댓글 섹션 */}
      <S.CommentSection>
        <S.CommentCount>댓글 {project.commentCount}</S.CommentCount>
        {project.comments.map((c, i) => (
          <S.Comment key={i}>
            <S.CommentAuthor>{c.author}</S.CommentAuthor>
            <S.CommentDate>{c.date}</S.CommentDate>
            <S.CommentText>{c.text}</S.CommentText>
          </S.Comment>
        ))}
      </S.CommentSection>

      {/* 입력창 */}
      <S.InputWrapper>
        <S.Input placeholder="댓글을 입력하세요." />
        <S.SendButton>➤</S.SendButton>
      </S.InputWrapper>
    </S.Container>
  );
};

export default ProjectDetail;
