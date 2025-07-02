import styled from "styled-components";

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
export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  flex-shrink: 0;
`;
export const Title = styled.h1`
  font-size: 18px;
  margin-left: 10px;
`;

export const GroupProfile = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
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
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3f3;
  padding: 10px;
  border-radius: 8px;
`;

export const ProjectImage = styled.div`
  width: 50px;
  height: 50px;
  background: #ddd;
  margin-right: 10px;
`;

export const ProjectText = styled.p`
  font-size: 13px;
`;

export const SectionContent = styled.p`
  font-size: 13px;
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
  background: #f6f6f6;
  padding: 15px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 20px;
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
