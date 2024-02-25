import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import data from './data.json';
import './main.css';

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #902443;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 80%;
  height: 560px;
  top: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
  margin: auto;
`;

const Logo = styled.div`
  position: relative;
  width: 81px;
  height: 81px;
  margin: auto;
  top: 43px;
`;

const Title = styled.div`
  position: relative;
  height: 48px;
  top: 53px;
  margin: auto;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #5e162b;
`;

const Name = styled.div`
  position: relative;
  width: 36px;
  height: 26px;
  top: 109px;
  left: 10px;
`;

const NameBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  top: 117px;
  background: #cd99a6;
  border-radius: 50px;
  border: 0;
  outline: none;
`;

const Phone = styled.div`
  position: relative;
  width: 74px;
  height: 26px;
  top: 155px;
  left: 8px;
`;

const PhoneBox = styled.input`
  position: relative;
  width: 210px;
  height: 35px;
  top: 161px;
  background: #cd99a6;
  border-radius: 50px;
  border: 0;
  outline: none;

  ::placeholder {
    color: white;
  }
`;

const Button = styled.div`
  position: relative;
  width: 93px;
  height: 36px;
  top: 195px;
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
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const Footer = styled.div`
  position: relative;
  height: 29px;
  top: 280px;
  margin: auto;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`;

const Rec = styled.div`
  position: relative;
  width: 10px;
  top: 121px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
`;

const Rec2 = styled.div`
  position: relative;
  width: 10px;
  top: 167px;
  border: 3.5px solid #dc7190;
  transform: rotate(90deg);
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
    for (let i = 0; i < 46; i++) {
      if (id == data[i].name && pw == data[i].phone && data[i].pass == 1) {
        console.log(id, pw, i);
        navigate('/pass', { state: data[i].name });
        break;
      } else if (
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

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo.png`}
            width="81px"
          />
        </Logo>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br /> 11기 아기사자 합격자 발표
        </Title>
        <Div>
          <Container>
            <Rec />
            <Name>성함</Name>
            <NameBox className="nameBox" onChange={handleInput}></NameBox>
            <Rec2 />
            <Phone>전화번호</Phone>
            <PhoneBox
              placeholder="010-xxxx-xxxx"
              className="phoneBox"
              onChange={handlePwInput}
            ></PhoneBox>
          </Container>
          <Button onClick={discriminate}>
            <BtnLetter>입력</BtnLetter>
          </Button>
        </Div>
        <Footer>DONGDUK X LIKELION</Footer>
      </WhiteBox>
    </Background>
  );
};

export default Main;
