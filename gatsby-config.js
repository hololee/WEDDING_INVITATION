require = require("esm")(module);
const config = require("./config.js");

module.exports = {
  siteMetadata: {
    title: `${config.GROOM_NAME}❤${config.BRIDE_NAME} 결혼식에 초대합니다🤵👰`,
    siteUrl: `${config.WEB_URL}`,
  },
  plugins: ["gatsby-plugin-styled-components"]
};
