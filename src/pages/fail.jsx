import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  position: relative;
  height: 100vh;
  background: #767676;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 80%;
  height: 571px;
  top: 10%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 4px;
`;

const ContentBox = styled.div`
  position: relative;
  margin: auto;
`;

const Logo = styled.div`
  position: relative;
  margin: auto;
  height: 43px;
  width: 43px;
  top: 20px;
`;

const TextBox = styled.div`
  padding-top: 60px;
  margin: auto;
  width: 260px;
  height: 60vh;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  #bold {
    font-weight: bold;
  }
`;
const Back = styled.div`
  position: absolute;
  top: 15px;
  cursor: pointer;
`;

const fail = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate(-1);
  };

  return (
    <Background>
      <Back onClick={gotoHome}>
        <img src={`${process.env.PUBLIC_URL}/images/left.svg`} width="40px" />
      </Back>
      <WhiteBox>
        <ContentBox>
          <Logo>
            <img
              src={`${process.env.PUBLIC_URL}/images/ddwu_logo.png`}
              alt="DDWU Logo"
              width="43px"
            />
          </Logo>
          <TextBox>
            안녕하세요. 동덕여대 멋쟁이사자처럼
            <br />
            운영진입니다.
            <br />
            <br />
            우선 동덕여대 멋쟁이사자처럼 12기
            <br />
            아기사자 모집에 관심을 가지고
            <br />
            지원해 주신 점, 매우 감사드립니다.
            <br />
            <br />
            지원자님의 면접을 바탕으로 운영진들의
            <br />
            의견을 종합하여 평가하였으나,
            <br />
            제한된 선발 인원으로 인해 긍정적인 회신을
            <br /> 드리지 못하게 되었습니다.
            <br />
            <br />
            아쉽지만 지원자님께서 보여주신
            <br />
            관심과 열정에 다시 한 번 감사드리며,
            <br />
            다음 기회에 더 좋은 인연으로
            <br />
            함께 할 수 있기를 진심으로 바라겠습니다.
            <br />
            <br />
            <div id="bold">
              추가 합격자의 경우 "3월 15일 금요일" 까지
              <br />
              연락 드리겠습니다.
            </div>
            <br />
            <br />
            감사합니다.
            <br />
            동덕여대 멋쟁이사자처럼 운영진 드림.
          </TextBox>
        </ContentBox>
      </WhiteBox>
    </Background>
  );
};

export default fail;
