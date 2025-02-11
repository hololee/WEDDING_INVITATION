import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-family: "MaruBuri";
  font-weight: 600;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.79rem;
  font-family: "MaruBuri";
  font-weight: 400;
  line-height: 1.55;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  letter-spacing: 0.13em;
  font-size: 0.875rem;
  font-family: "MaruBuri";
  font-weight: 600;
  line-height: 1.75;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-in">초대합니다</Title>
      </Divider>
      <Content data-aos="fade-in">
        오랜 시간 소중한 이야기를 쌓아온 두 사람
        <br />
        <br />
        봄바람처럼 서로를 따뜻하게 보듬고,
        <br />
        <br />
        활짝 핀 꽃처럼 밝은 꿈이 되어주면서,
        <br />
        <br />
        온기 가득한 삶을 꾸려가겠습니다.
        <br />
        <br />
        사랑으로 첫 걸음을 내딛는 날 함께해 주세요.
        <br />
        <br />
      </Content>
      <GroomBride data-aos="fade-in">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
