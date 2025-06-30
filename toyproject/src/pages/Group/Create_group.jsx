import React, { useState } from "react";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import * as S from "../../styles/Group/styleCreate_group";

const GroupCreate = () => {
  return (
    <S.Container>
      <S.Header>
        <S.CloseButton
          src={`${process.env.PUBLIC_URL}/images/xBtn.svg`}
          onClick={() => window.history.back()}
        ></S.CloseButton>
        <S.Title>그룹 생성</S.Title>
      </S.Header>

      <S.Form>
        <S.Label>그룹명</S.Label>
        <S.Input />

        <S.Label>프로젝트</S.Label>
        <S.SearchWrapper>
          <S.Input placeholder="프로젝트명 검색" />
          <AiOutlineSearch size={18} color="#5264FF" />
        </S.SearchWrapper>

        <S.Label>파트</S.Label>
        <S.Input />

        <S.Label>세부설명</S.Label>
        <S.Textarea />

        <S.Label>팀원</S.Label>
        <S.TeamList>
          <S.AddMember>+ 4/10</S.AddMember>

          <S.Member>
            <S.MemberCircle></S.MemberCircle>
            <S.RemoveButton>
              <IoIosClose size={16} />
            </S.RemoveButton>
          </S.Member>
        </S.TeamList>
      </S.Form>

      <S.SubmitButton>그룹 생성</S.SubmitButton>
    </S.Container>
  );
};

export default GroupCreate;
