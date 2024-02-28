import React, { useState } from 'react';
import styled from 'styled-components';
import data from './data.json';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './main.css';

const Background = styled.div`
  position: relative;
  height: 100vh;
  background: #902443;
`;

const Line1 = styled.div`
  position: absolute;
  width: 151.31px;
  height: 284px;
  top: -30px;
`;
const Line2 = styled.div`
  position: absolute;
  width: 261.56px;
  height: 355.01px;
  bottom: -5px;
  right: 40px;
  z-index: 0;
`;
const WhiteBox = styled.div`
  position: relative;
  width: 75%;
  height: 498px;
  top: 130px;
  background: #ffffff;z
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.59);
  border-radius: 5px;
  margin: auto;
  z-index: 1;
`;

const Logo = styled.div`
  position: relative;
  width: 81px;
  height: 81px;
  margin: auto;
  top: 35px;
`;

const Title = styled.div`
  position: relative;
  height: 48px;
  top: 45px;
  margin: auto;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #5e162b;
`;
const NameRec = styled.div`
  position: relative;
  width: 36px;
  height: 26px;
  top: 90px;
`;
const PhoneRec = styled.div`
  position: relative;
  width: 36px;
  height: 26px;
  top: 120px;
`;
const Rec = styled.div`
  position: relative;
  width: 10px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
`;
const TextLabel = styled.div`
  position: relative;
  font-family: 'SUIT';
  width: 74px;
  height: 26px;
  text-align: left;
  left: 15px;
  bottom: 11.5px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const NameBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  top: 85px;
  background: #cd99a6;
  border: 0;
  outline: none;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 5.8px 1px rgba(0, 0, 0, 0.25);
`;

const PhoneBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  top: 115px;
  background: #cd99a6;
  border: 0;
  outline: none;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 5.8px 1px rgba(0, 0, 0, 0.25);
`;

const Button = styled.div`
  position: relative;
  width: 93px;
  height: 36px;
  top: 145px;
  background: #902443;
  border-radius: 10px;
  cursor: pointer;
  margin: auto;
`;

const BtnLetter = styled.div`
  position: relative;
  height: 26px;
  top: 5px;
  font-family: 'SUIT';
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: -11vh;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Div = styled.div`
  text-align: center;
  margin: auto;
`;

const Container = styled.div`
  width: 210px;
  margin: auto;
`;

const Main = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function handleInput(event) {
    setId(event.target.value);
    //console.log("id", id);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
    //console.log("pw", pw);
  }

  const discriminate = () => {
    // 휴대폰번호 정규식 확인 추가
    if (!/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/.test(pw)) {
      alert('올바른 전화번호 형식이 아닙니다. 다시 입력해주세요.');
    }
    for (let i = 0; i < 46; i++) {
      if (
        data[i] &&
        id == data[i].name &&
        pw == data[i].phone &&
        data[i].pass == 1
      ) {
        console.log(id, pw, i);
        navigate('/pass', { state: data[i].name });
        break;
      } else if (
        data[i] &&
        id == data[i].name &&
        pw == data[i].phone &&
        data[i].pass == 0
      ) {
        console.log(id, pw, i);
        navigate('/fail');
        break;
      } else if (i == 45) {
        console.log(id, pw, i);
        alert(
          '등록되지 않은 성함/번호입니다. \n성함과 번호를 다시 한 번 확인해주세요!',
        );
        break;
      }
    }
  };

  const handleOnKeyPress = e => {
    if (e.key == 'Enter') {
      discriminate();
    }
  };
  return (
    <Background>
      <Line1>
        <img src={`${process.env.PUBLIC_URL}/images/main_leftup.png`} />
      </Line1>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo.png`}
            width="81px"
          />
        </Logo>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br /> 12기 아기사자 합격자 발표
        </Title>
        <Div>
          <Container>
            <NameRec>
              <Rec />
              <TextLabel>성함</TextLabel>
            </NameRec>
            <NameBox
              placeholder="김멋사"
              className="nameBox"
              onChange={handleInput}
            ></NameBox>
            <PhoneRec>
              <Rec />
              <TextLabel>전화번호</TextLabel>
            </PhoneRec>
            <PhoneBox
              placeholder="010-0000-0000"
              className="phoneBox"
              onChange={handlePwInput}
              onKeyPress={handleOnKeyPress} // Enter 입력 이벤트 함수
            ></PhoneBox>
          </Container>
          <Button onClick={discriminate}>
            <BtnLetter>입력</BtnLetter>
          </Button>
        </Div>
        <Footer>LIKELION UNIV . DWU</Footer>
      </WhiteBox>
      <Line2>
        <img src={`${process.env.PUBLIC_URL}/images/main_bottom.png`} />
      </Line2>
    </Background>
  );
};

export default Main;
