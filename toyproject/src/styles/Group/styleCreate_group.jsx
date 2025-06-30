import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  padding: 20px;
  box-sizing: border-box;
  font-family: SUIT, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const CloseButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 18px;
  margin: 0;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 14px;
  margin: 12px 0 4px;
`;

export const Input = styled.input`
  width: 353px;
  height: 55px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    right: 12px;
    color: #969696;
  }
`;

// 텍스트 에어리어
export const Textarea = styled.textarea`
  width: 353px;
  height: 170px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  font-size: 14px;
  resize: none;
  box-sizing: border-box;
`;

// 팀원 리스트
export const TeamList = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
`;

// 멤버 추가 버튼
export const AddMember = styled.div`
  min-width: 60px;
  height: 60px;
  border: 1px dashed #5061ff;
  border-radius: 50%;
  color: #5061ff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;

// 멤버 아이템
export const Member = styled.div`
  position: relative;
  flex-shrink: 0;
`;
export const MemberCircle = styled.div`
  width: 60px;
  height: 60px;
  background: #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
export const RemoveButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
`;

// 제출 버튼
export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  margin: 24px 0 0;
  background: #5061ff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
