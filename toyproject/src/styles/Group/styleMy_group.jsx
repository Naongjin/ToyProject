import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  padding: 20px;
  box-sizing: border-box;
  font-family: SUIT, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Box = styled.div`
  position: absolute;
  top: 73px;

  width: 393px; // 2개의 셀 + gap
  height: 85px; // 한 줄 높이 + 반 gap
  background: rgba(80, 97, 255, 0.05);

  z-index: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-left: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const GroupProfile = styled.div`
  display: grid;
  background: transparent;
  grid-template-columns: repeat(2, 60px);
  grid-template-rows: repeat(2, 60px);
  gap: 0px;
  position: relative;
  z-index: 1;
  padding: 8px;
  border-radius: 12px;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 80px; // 그리드 위로 띄우기
  right: -100px; // 오른쪽으로 붙이기
  display: flex;
  gap: 6px;
  align-items: center;
  color: #5061ff;
  font-size: 15px;
  font-family: "BM JUA_OTF";
`;
export const IconComment = styled.img`
  width: 18px;
  height: 18px;
`;

export const Like = styled.img`
  width: 18px;
  height: 18px;
`;
export const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  background: #ddd;
  border-radius: 50%;
`;

export const GroupName = styled.h2`
  text-align: center;
  color: #2647ff;
  margin-bottom: 10px;
`;

export const ChatInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2647ff;
  margin-bottom: 20px;
`;

export const ChatCount = styled.span`
  margin-left: 5px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;
export const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: auto; // ← 핵심
  margin-bottom: 20px;
  gap: 16px;
`;
export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 393px;
  height: 200px; // ← 핵심
  margin-bottom: 40px;
  gap: 16px;
`;
export const SectionTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 8px;
  margin-left: 2px;
  align-self: flex-start;
`;

export const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  padding: 10px;
  border-radius: 8px;
  width: 353px;
  height: 118px;
`;

export const ProjectImage = styled.div`
  width: 105px;
  height: 105px;
  background: #ddd;
  margin-right: 10px;
`;

export const ProjectText = styled.p`
  color: #000;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 8px;
`;
export const ProjectDetail = styled.p`
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  transform: translateY(-25px);
`;
export const SectionContent = styled.p`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; // 선택 사항
`;

export const TeamList = styled.div`
  display: flex;
  gap: 10px;
`;

export const MemberIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #ddd;
  border-radius: 50%;
`;

export const IntroBox = styled.div`
  padding: 15px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  width: 296px;
  height: 162px;
`;

export const CommentSection = styled.div``;

export const Comment = styled.div`
  margin-bottom: 20px;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

export const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
  margin-left: 10px;
`;

export const CommentText = styled.p`
  margin-top: 5px;
  font-size: 13px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 25px;
  overflow: hidden;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  padding: 10px 15px;
  outline: none;
`;

export const SendButton = styled.button`
  background: none;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  font-size: 18px;
`;
