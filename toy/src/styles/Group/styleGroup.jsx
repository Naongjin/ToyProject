import styled from "styled-components";

// 전체 페이지 컨테이너
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 상단 뒤로가기 버튼
export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  cursor: pointer;
`;

// 상단 텍스트
export const PText = styled.div`
  font-family: "Hakgyoansim Puzzle OTF", sans-serif;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: #000;
`;

// 상단 헤더 영역
export const Header = styled.div`
  width: 100%;
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 검색창
export const SearchBar = styled.div`
  width: 353px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
  margin-bottom: 20px;
  margin-top: 40px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  font-family: "SUIT", sans-serif;
  background: transparent;
`;

// 탭 메뉴
export const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 353px;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  color: ${(props) => (props.active ? "#5061FF" : "#969696")};
  cursor: pointer;
  font-family: "BM JUA_OTF", sans-serif;
  font-size: 20px;
  border-bottom: ${(props) => (props.active ? "3px solid #5061ff" : "none")};
  padding-bottom: 5px;
`;

// 그룹 개수와 필터
export const GroupCount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 353px;
  color: #000;
  font-family: "SUIT", sans-serif;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const FilterIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

// 그룹 리스트
export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
`;

// 그룹 카드
export const GroupCard = styled.div`
  width: 353px;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const GroupThumbnail = styled.img`
  width: 87px;
  height: 87px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

export const GroupInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 87px;
`;

export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5061ff;
  font-family: "BM JUA_OTF", sans-serif;
  font-size: 20px;
`;

export const MemberCount = styled.div`
  font-size: 14px;
  color: #5061ff;
`;

export const GroupTags = styled.div`
  font-family: "SUIT", sans-serif;
  font-size: 12px;
  color: #555;
`;

export const GroupBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 30 px;
`;

export const Comment = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Like = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const RequestButton = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  color: #5061ff;
  font-size: 12px;
  font-family: "SUIT", sans-serif;
  cursor: pointer;
`;

// 플로팅 버튼
export const FloatingAdd = styled.div`
  position: absolute;
  right: 20px;
  bottom: 115px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #d9d9d9;
  color: #969696;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

// 전체 그룹 컨테이너
export const GroupContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
  flex: 1;
`;
