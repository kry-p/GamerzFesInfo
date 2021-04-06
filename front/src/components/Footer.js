import React from 'react';
import Card from './common/Card';
import styled from 'styled-components';

const FooterStyle = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: TmoneyRoundWindRegular;
  font-size: 0.75rem;
`;

const Footer = () => {
  return (
    <Card small>
      <FooterStyle>여기에 Footer 내용이 들어갑니다.</FooterStyle>
    </Card>
  );
};

export default Footer;
