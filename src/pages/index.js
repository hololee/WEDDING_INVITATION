import React, { useRef, useEffect } from "react";
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

import AOS from "aos";
import "aos/dist/aos.css";

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

const IndexPage = () => {

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
  );
};

export default IndexPage;
