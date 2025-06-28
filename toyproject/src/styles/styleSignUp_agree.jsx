import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 850px;
  background: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const BackBtn = styled.img`
  position: absolute;

  left: 20px;

  height: 23px;
  flex-shrink: 0;
`;
export const SUText = styled.div`
  width: 125px;
  height: 36px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Hakgyoansim Puzzle OTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Header = styled.div`
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
`;
export const StatusBar = styled.div`
  width: 353px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
`;
export const Status = styled.div`
  width: 56px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5061ff;
`;
export const Step = styled.div`
  width: 242px;
  height: 52px;
  flex-shrink: 0;
  color: #5061ff;
  text-align: center;
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Text = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const TermBox = styled.div`
  width: 353px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  overflow-y: auto;
`;
export const TermBtnGroup = styled.div`
  display: flex;
  gap: 10px; /* 버튼 사이 간격 */
  margin-top: 10px;
`;
export const TermOption = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* 버튼과 텍스트 사이 간격 */
`;

export const TermText = styled.div`
  width: 318px;
  flex-shrink: 0;
  color: #000;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
`;
export const AgreeAll = styled.div`
  width: 353px;
  height: 55px;
  display: flex; /* 중앙 정렬을 위한 핵심 */
  justify-content: center;
  align-items: center; /* ← 여기가 텍스트를 수직 중앙 정렬 */
  border-radius: 10px;
  border: 1px solid #5061ff;
  background: #fff;
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NextBtn = styled.div`
  width: 393px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center; /* ← 여기가 수직 정렬 */
  background: #5061ff;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const TermBtn = styled.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 0.5px solid #5061ff;
  background: #fff;
`;
