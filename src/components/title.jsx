import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo.mp4";

const Layout = styled.div`
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.72rem;
  font-family: "MaruBuri";
  font-weight: 600;
  opacity: 0.45;
  margin-bottom: 32px;
`;

const GroomBride = styled.p`
  font-size: 1.2rem;
  letter-spacing: 3px;
  font-family: "MaruBuri";
  font-weight: 600;
  margin-bottom: 24px;
`;

const AndSymbol = styled.span`
  padding-right: 10px;
  padding-left: 10px;
  vertical-align: -3px;
  font-family: "Delux_Edition";
  font-size: 1.2rem; /* 크기 조절 */
  font-weight: 600;
  margin-bottom: 24px;
`;

const Schedule = styled.p`
  color: #323232;
  font-size: 0.82rem;
  font-family: "MaruBuri";
  font-weight: 300;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>Wedding Invitation</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} <AndSymbol>and</AndSymbol> {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
    </Layout>
  );
};

export default Title;
