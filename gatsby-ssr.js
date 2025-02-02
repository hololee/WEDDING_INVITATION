import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { GROOM_NAME, BRIDE_NAME, WEB_URL, KAKAOTALK_SHARE_IMAGE } from "./config";

export const onRenderBody = ({ setHeadComponents }) => {
    const helmetContext = {};

    setHeadComponents([
        <HelmetProvider context={helmetContext} key="helmet">
            <meta property="og:title" content={`${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다🤵👰`} />
            <meta property="og:description" content="모바일 청첩장을 확인해주세요💍" />
            <meta property="og:image" content={KAKAOTALK_SHARE_IMAGE} />
            <meta property="og:url" content={WEB_URL} />
            <meta property="og:type" content="website" />
        </HelmetProvider>,
    ]);
};