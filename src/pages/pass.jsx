import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import JSConfetti from 'js-confetti';

const Background = styled.div`
  position: relative;
  background: #902443;
  height: 100vh;
  overflow: scroll;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 320px;
  height: 600px;
  top: 10vh;
  margin: 0 auto;
  background: #ffffff;
  filter: drop-shadow(0px 0px 10px #fff);
  border-radius: 5px;
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 50%;
  top: 9vh;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  position: relative;
  padding-top: 17vh;
  margin: 0 auto;
`;

const PassText = styled.p`
  color: #5e162b;
  text-align: center;
  font-family: SUIT;
  font-size: 36px;
  font-weight: 800;
  line-height: 2.5rem;
`;

const TextWrapper = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PassNameDiv = styled.div`
  width: 120px;
  display: flex;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 20px;
  line-height: 10px;
  color: #000000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const PassName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 10px;
  color: #0075ff;
`;

const PassNameSub = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 10px;
  color: #000000;
`;

const TextDiv = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-align: center;
  padding-top: 0.8rem;
  line-height: 1.2rem;
  #caution {
    color: gray;
  }
`;

const LetterImg = styled.img`
  filter: drop-shadow(0px 0px 7px #fff);
  border-radius: 5px;
  width: 380px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -130px;
  z-index: -1; /* 다른 요소보다 위에 나타나도록 설정 */
`;
const Back = styled.div`
  position: absolute;
  top: 15px;
  cursor: pointer;
`;

const Pass = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate(-1);
  };

  const location = useLocation();
  const name = location.state;
  console.log(name);

  const jsConfetti = new JSConfetti();

  const confetti = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        // '#ff0a54',
        // '#fde047',
        // '#a3e635',
        // '#38bdf8',
        // '#c4b5fd',
        // '#f9bec7',
        '#DF013A',
        '#FFFF00',
        '#FFFFFF',
      ],
      confettiRadius: 4,
      confettiNumber: 400,
    });
  };

  confetti();
  var timer = setInterval(confetti, 3000);
  setTimeout(stopConfetti, 9000);
  window.addEventListener('popstate', stopConfetti);
  window.addEventListener('beforeunload', stopConfetti);
  function stopConfetti() {
    clearInterval(timer);
  }

  return (
    <Background>
      <Back onClick={gotoHome}>
        <img src={`${process.env.PUBLIC_URL}/images/left.svg`} width="40px" />
      </Back>
      <WhiteBox>
        <Logo src="../images/ddwu_logo.png" />
        <Container>
          <PassText>
            합격을
            <br />
            축하합니다!
          </PassText>
          <TextWrapper>
            <PassNameDiv>
              <PassName>{name}</PassName>
              <PassNameSub>님</PassNameSub>은
            </PassNameDiv>
            <TextDiv>
              동덕여대 멋사 12기에 최종합격 하셨습니다 🎉
              <br />긴 선발 과정에 참여하시느라 고생 많으셨습니다.
              <br /> 자세한 사항은 discord를 통해 안내드리겠습니다.
              <br />
              <br />
              <a href="https://discord.gg/XvjvEJsU" target={'_blank'}>
                https://discord.gg/XvjvEJsU
              </a>
              <br />
              <br />
              3월 15일(금) 오후 15:00 까지
              <br />
              디스코드에 들어와주세요!
              <br />
              <br />
              3/17(일) 동덕 멋사 OT에서 만나요~ <br />
              *장소 추후 안내 예정
              <br />
              <br />
              <div id="caution">
                미등록 예정자는 1차 합격 안내 연락처로
                <br />
                개별 연락 부탁드립니다.
              </div>
              <br />
            </TextDiv>
          </TextWrapper>
        </Container>
        <LetterImg src="../images/envelope.png" />
      </WhiteBox>
    </Background>
  );
};

export default Pass;
