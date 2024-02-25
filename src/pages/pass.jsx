import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import JSConfetti from 'js-confetti';

const Container = styled.div`
  background: #902443;
  margin: 0 auto;
  height: 844px;
`;

const WhiteDiv = styled.div`
  position: relative;
  width: 327px;
  height: 676px;
  top: 55px;
  margin: 0 auto;
  background: #ffffff;
  filter: drop-shadow(0px 0px 10px #FFF);
  border-radius: 5px;
`;

const LogoImg = styled.img`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 134px;
  top: 40px;
`;

const PassText = styled.p`
  padding-top: 110px;
  text-align: center;
  color: #5E162B;
  text-align: center;
  font-family: SUIT;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const PassNameDiv = styled.div`
  padding-top: 35px;
  padding-bottom: 15px;
  margin-left: 113px;
  text-align: center;
  font-family: 'Pretendard';
  display: flex;

  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  color: #000000;
`;

const PassName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #0075ff;
`;

const PassNameSub = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

const TextDiv = styled.p`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.16px;
  font-style: normal;
  letter-spacing: 0.01em;
`;

const LetterImg = styled.img`
  height: 252.41px;
  margin-top: -18px;
  margin-left: -36px;
`;

const Pass = () => {
  const location = useLocation();
  const name = location.state;
  console.log(name);

  const jsConfetti = new JSConfetti();

  const confetti = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54',
        '#fde047',
        '#a3e635',
        '#38bdf8',
        '#c4b5fd',
        '#f9bec7',
      ],
      confettiRadius: 4,
      confettiNumber: 400,
    });
  };

  confetti();
  var timer = setInterval(confetti, 3000);
  setTimeout(stopConfetti, 9000);

  function stopConfetti() {
    clearInterval(timer);
  }

  return (
    <Container>
      <WhiteDiv>
        <LogoImg src="../images/ddwu_logo.png" />
        <PassText>
          합격을
          <br />
          축하합니다!
        </PassText>
        <PassNameDiv>
          <PassName>{name}</PassName>
          <PassNameSub>님</PassNameSub>은
        </PassNameDiv>
        <TextDiv>
          동덕여대 멋사 11기에 최종합격 하셨습니다 🎉
          <br />긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br /> 자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          <a href="https://discord.gg/BSHH7mck" target={'_blank'}>
            https://discord.gg/BSHH7mck
          </a>
          <br />
          <br />
          3월 15일까지 디스코드에 들어와주세요!
          <br />
          <br /> 3/17(일) 동덕 멋사 OT에서 만나요~ <br />
          *장소 추후 안내 예정
        </TextDiv>
        <LetterImg src="../images/envelope.png" />
      </WhiteDiv>
    </Container>
  );
};

export default Pass;
