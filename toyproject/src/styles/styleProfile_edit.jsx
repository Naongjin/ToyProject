import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1362px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  flex-shrink: 0;
  width="15"
  height="27"
`;
export const PText = styled.div`
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

export const ProfileBox = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;
export const Text = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Box = styled.div`
  width: 353px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
`;
export const TextArea = styled.textarea`
  width: 353px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
`;
