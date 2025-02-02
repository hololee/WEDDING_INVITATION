import React, { useRef, useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";
import { GROOM_NAME, BRIDE_NAME, KAKAOTALK_SHARE_IMAGE } from "../../config";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

export const getServerData = async () => {
  return {
    props: {
      groomName: GROOM_NAME,
      brideName: BRIDE_NAME,
      ogImage: KAKAOTALK_SHARE_IMAGE,
    },
  };
};

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #fefefe;
  width: 100%;
`;

const BorderWrapper = styled.div`
  background-image: url(${GroovePaper});
  width: 90%;
  margin: 5vw auto;
  margin-bottom: 0;
  background: #fefefe;
  border-left: 1.5px solid #c4af71;
  border-right: 1.5px solid #c4af71;
  border-top: 1.5px solid #c4af71;
  border-bottom: none;
`;

const IndexPage = ({ serverData }) => {

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  const audioRef = useRef(null);
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => console.error("자동 재생 차단:", error));
        document.removeEventListener("click", enableAudio);
      }
    };

    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${serverData.groomName}❤${serverData.brideName} 결혼식에 초대합니다🤵👰`}</title>
        <meta property="og:title" content={`${serverData.groomName}❤${serverData.brideName} 결혼식에 초대합니다🤵👰`} />
        <meta property="og:description" content="링크의 청첩장을 확인해주세요 💍" />
        <meta property="og:image" content={serverData.ogImage} />
        <meta property="og:url" content="https://wedding.hololee.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Wrapper>
        <BorderWrapper>
          <audio ref={audioRef} loop>
            <source src={Song} type="audio/mpeg" />
          </audio>
          <Title />
          <Greeting />
          <Gallery />
          <Location />
          <Quote />
          <CongratulatoryMoney />
        </BorderWrapper>
        <Share />
      </Wrapper>
    </>
  );
};

export default IndexPage;
