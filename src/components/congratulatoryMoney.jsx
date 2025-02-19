import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 1px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
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

const Description = styled.p`
  font-size: 0.72rem;
  font-family: "MaruBuri";
  font-weight: 400;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ButtonWrap = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ContactButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 20px 10px;
    background-color: rgba(233, 233, 233, 0.2);
  border: 1px solid rgba(196, 175, 113, 0.3);
  border-radius: 5px;

  &:active {
    background-color: rgba(233, 233, 233, 0.7);
  }
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  font-family: "MaruBuri";
  font-weight: 400;
  line-height: 1.75;
  opacity: 0.75;
  margin: 5px;
`;

const SubBlueContent = styled.span`
  font-size: 0.875rem;
  font-family: "MaruBuri";
  font-weight: 700;
  color:rgb(55, 141, 222);
  line-height: 1.75;
`;

const SubPinkContent = styled.span`
  font-size: 0.875rem;
  font-family: "MaruBuri";
  font-weight: 700;
  color:rgb(223, 27, 200);
  line-height: 1.75;
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <Divider
        data-aos="fade-in"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>마음 전하실 곳</Title>
      </Divider>

      <ButtonWrap>
        <ContactButton data-aos="fade-in" onClick={() => setGroomVisible(true)}>
          {/* <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#829fe0"
          /> */}
          <br />
          <SubContent><SubBlueContent>신랑</SubBlueContent>측 계좌번호 확인</SubContent>
        </ContactButton>
        <ContactButton data-aos="fade-in" onClick={() => setBrideVisible(true)}>
          <br />
          <SubContent><SubPinkContent>신부</SubPinkContent>측 계좌번호 확인</SubContent>
        </ContactButton>
      </ButtonWrap>
      <Modal
        title={<SubContent><SubBlueContent>신랑</SubBlueContent>측 계좌번호</SubContent>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <SubContent>부 : {GROOM_FATHER_NAME}</SubContent>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, fontSize: "0.875rem", fontFamily: "MaruBuri", fontWeight: 400 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <SubContent>모 : {GROOM_MOTHER_NAME}</SubContent>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, fontSize: "0.875rem", fontFamily: "MaruBuri", fontWeight: 400 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <SubContent>신랑 : {GROOM_NAME}</SubContent>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, fontSize: "0.875rem", fontFamily: "MaruBuri", fontWeight: 400 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<SubContent><SubPinkContent>신부</SubPinkContent>측 계좌번호</SubContent>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <SubContent>부 : {BRIDE_FATHER_NAME}</SubContent>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, fontSize: "0.875rem", fontFamily: "MaruBuri", fontWeight: 400 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <SubContent>모 :{BRIDE_MOTHER_NAME}</SubContent>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, fontSize: "0.875rem", fontFamily: "MaruBuri", fontWeight: 400 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <SubContent>신부 : {BRIDE_NAME}</SubContent>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, fontSize: "0.875rem", fontFamily: "MaruBuri", fontWeight: 400 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
