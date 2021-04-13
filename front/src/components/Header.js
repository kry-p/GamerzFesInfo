import React from 'react';
import styled, { css } from 'styled-components';

import { RiRefreshLine, RiMenuFill } from 'react-icons/ri';

import Card from './common/Card';
import Responsive from './common/Responsive';
import palette from '../lib/styles/palette';
import Button from './common/Button';

// items css
const Logo = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  letter-spacing: 2px;
  text-align: center;
  font-size: 18px;
  font-family: TmoneyRoundWindExtraBold;

  ${(props) =>
    props.colorize &&
    css`
      color: ${palette.logo_base[0]};
    `}
`;

const TextWrappper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left.right {
    display: flex;
    align-items: center;
  }
`;

/*
 * TODO: 상단 버튼 액션 정의
 */
const Header = () => {
  return (
    <Card small>
      <ContentWrapper>
        <Button left icon>
          <RiRefreshLine />
        </Button>

        <TextWrappper>
          <Logo>game</Logo>
          <Logo colorize>alive</Logo>
        </TextWrappper>

        <Button right icon>
          <RiMenuFill />
        </Button>
      </ContentWrapper>
    </Card>
  );
};

export default Header;
