import React, { useState } from "react";
import { Button, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  width: 100%;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background-color: rgba(234, 218, 172, 0.52);
  border-color: rgba(234, 218, 172, 0.52) !important;
  color: var(--title-color) !important;
  font-weight: 400 !important;
  align-item: center;
  width: 100%;
  &:hover {
    background-color: rgb(234, 219, 172) !important;
    border-color: rgb(234, 218, 172) !important;
    color: var(--title-color) !important;
  }
`;
const ShareKakao = () => {
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(KAKAOTALK_API_TOKEN);
      }

      kakao.Link.createDefaultButton({
        objectType: "feed",
        container: "#sendKakao",
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
        installTalk: true,
      });

      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("카카오톡으로 청첩장을 공유합니다!");
      }, 100);
    }
  };

  const [copied, setCopied] = useState(false);
  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // 현재 페이지 제목
          text: "이 웹페이지를 공유합니다!",
          url: window.location.href, // 현재 페이지 URL
        });
      } catch (error) {
        console.error("공유 실패:", error);
        navigator.clipboard.writeText(window.location.href).then(() => {
          setCopied(true);
          message.success("청첩장 링크가 복사되었습니다.");
        });
      }
    } else {
      console.log("Web Share API를 지원하지 않는 브라우저입니다.");
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        message.success("청첩장 링크가 복사되었습니다.");
      });
    }
  };

  return (
    <Wrapper>
      <KakaoTalkShareButton
        style={{ margin: 0 }}
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={createKakaoButton}
      >
        카카오톡으로 공유하기
      </KakaoTalkShareButton>
      <LinkShareButton
        style={{ margin: 0 }}
        icon={<LinkOutlined />}
        size="large"
        onClick={shareLink}
      >
        링크로 공유하기
      </LinkShareButton>
    </Wrapper>
  );
};

export default ShareKakao;
