import React, { useEffect, useState } from "react";
import { Divider, message } from "antd";
import styled from "styled-components";
import CopyIcon from "../assets/copy.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  font-family: "MaruBuri";
  font-weight: 600;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  font-family: "MaruBuri";
  font-weight: 400;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const SupportContent = styled.span`
  font-size: 0.72rem;
  font-family: "MaruBuri";
  font-weight: 400;
  line-height: 1.75;
  opacity: 0.55;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const CopyContainer = styled.div`
  font-size: 0.85rem;
  font-family: "MaruBuri";
  font-weight: 700;
  line-height: 1.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
  cursor: pointer;
  text-decoration: underline; /* 호버 시 밑줄 추가 */
  text-decoration-color:rgb(213, 213, 213);

  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 추가 */
    text-decoration-color:rgb(105, 105, 105);
  }
`;

const Icon = styled.img`
  width: 1em; /* 텍스트 크기와 동일 */
  height: 1em; /* 정사각형 크기 유지 */
  object-fit: contain; /* 이미지 비율 유지 */
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1738426071785",
    "key" : "2mwhu",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "07708ab0";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  const [copied, setCopied] = useState(false);
  const textToCopy = "서울 구로구 새말로 97";
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      message.success("주소가 복사되었습니다.")
    });
  };

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Map
        id="daumRoughmapContainer1738426071785"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        <CopyContainer onClick={handleCopy}>
          서울 구로구 새말로 97 신도림테크노마트
          <br />
          웨딩시티 11층 그랜드 볼룸 <Icon src={CopyIcon} alt="복사" />
        </CopyContainer>
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        신도림역 (17-102)정류장 하차
        <br />
        신도림역 (17-001)정류장 하차
        <br />
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        1호선 2호선 신도림역
        <br />
        <SupportContent>신도림역 3번출구 테크노마트 판매동 지하1층과 직접 연결되어 있습니다.</SupportContent>
        <br />
        <br />
        <br />
        <Title>주차 안내</Title>
        <br />
        <br />
        테크노마트 지하주차장 이용(B3~B7)
        <br />
        <SupportContent>주차요원의 안내를 받으세요.</SupportContent>
        <br />
        <br />
        <br />
        <Title>전세버스 안내</Title>
        <br />
        <br />
        ○○에서 ○○시 ○○분에 출발 예정
        <br />
        <SupportContent>탑승 여부를 알려주세요.</SupportContent>
        <br />
      </Content>
    </Wrapper>
  );
};

export default Location;
