import React from 'react';
import styled, { css } from 'styled-components';

import { RiMenuFill, RiNotification4Line } from 'react-icons/ri';

import Card from './common/Card';
import Responsive from './common/Responsive';
import palette from '../lib/styles/palette';

import IconButton from '@material-ui/core/IconButton';

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
`;

/*
 * TODO: 상단 버튼 액션 정의
 */
const Header = ({ history }) => {
  return (
    <>
      <Card big header>
        <ContentWrapper>
          <IconButton
            onClick={() => {
              history.push('/menu');
            }}
          >
            <RiMenuFill />
          </IconButton>

          <TextWrappper>
            <Logo>game</Logo>
            <Logo colorize>alive</Logo>
          </TextWrappper>

          <IconButton>
            <RiNotification4Line />
          </IconButton>
        </ContentWrapper>
      </Card>
    </>
  );
};

export default Header;
