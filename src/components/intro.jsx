import React from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/video.mp4";


const VideoWrapper = styled.div`
  position: relative; /* 내부 요소의 절대 위치를 기준 잡기 */
  width: 100%;
`;

const VideoBackground = styled.video`
  width: 100%;
  display: block;
`;

const Overlay = styled.div`
  margin-top: 3vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 94%;
  height: 100%;
  border-left: 1.5px solid rgb(255 255 255 / 30%);
  border-right: 1.5px solid rgb(255 255 255 / 30%);
  border-top: 1.5px solid rgb(255 255 255 / 30%);
  pointer-events: none;
`;

const WeddingInvitation = styled.p`
  position: absolute;
    margin-top: 6vw;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 0.8rem;
    font-family: MaruBuri;
    font-weight: 600;
    color: #ffffff;
    opacity: 0.7;
`;

const Intro = () => {
  return (
    <VideoWrapper>
      <WeddingInvitation>
        WEDDING INVITATION
      </WeddingInvitation>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
      <Overlay />

    </VideoWrapper>

  );
};

export default Intro;
