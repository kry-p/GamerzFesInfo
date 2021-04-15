import React from 'react';
import Card from './common/Card';
import styled from 'styled-components';

// footer card css
const FooterStyle = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: TmoneyRoundWindRegular;
  font-size: 0.625em;
`;

const Footer = () => {
  return (
    <Card big>
      <FooterStyle>
        gamealive 는 게임물관리위원회의 심의정보를 수집, 제공하는 웹
        사이트입니다.
        <br></br>민간이 집계한 정보이므로 공식적 근거 자료로 활용할 수 없는 점
        유의 바랍니다.
      </FooterStyle>
    </Card>
  );
};

export default Footer;
