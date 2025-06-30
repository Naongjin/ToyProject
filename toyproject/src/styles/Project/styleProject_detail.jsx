import styled from "styled-components";

/* 컨테이너 & 헤더 */
export const Container = styled.div`
  width: 393px;
  padding: 20px;
  box-sizing: border-box;
  font-family: SUIT, sans-serif;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 18px;
  margin: 0;
`;

/* 이미지 */
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

/* 아이콘 행 */
export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #5061ff;
  margin-bottom: 16px;
`;
export const IconCount = styled.span`
  font-size: 14px;
  color: #5061ff;
  margin-right: 12px;
`;

/* 제목 */
export const ProjectTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  color: #2647ff;
  margin-bottom: 20px;
`;

/* 메타 리스트 */
export const MetaList = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const MetaLabel = styled.span`
  width: 100px;
  font-size: 14px;
  font-weight: 800;
`;
export const MetaValue = styled.span`
  font-size: 14px;
`;

/* 댓글 섹션 */
export const CommentSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const CommentCount = styled.div`
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 12px;
`;
export const Comment = styled.div`
  margin-bottom: 16px;
`;
export const CommentAuthor = styled.span`
  font-weight: 600;
  font-size: 14px;
`;
export const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
  margin-left: 8px;
`;
export const CommentText = styled.p`
  font-size: 13px;
  margin: 8px 0 0;
`;

/* 입력창 */
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 25px;
  overflow: hidden;
  padding: 4px 0;
`;
export const Input = styled.input`
  flex: 1;
  border: none;
  padding: 8px 12px;
  outline: none;
`;
export const SendButton = styled.button`
  background: none;
  border: none;
  padding: 0 12px;
  cursor: pointer;
  font-size: 18px;
`;
