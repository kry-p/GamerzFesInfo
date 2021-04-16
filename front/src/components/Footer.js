import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Kakaotalk } from '../resources/sns/kakaotalk.svg';
import { ReactComponent as Facebook } from '../resources/sns/facebook.svg';
import { ReactComponent as Twitter } from '../resources/sns/twitter.svg';

import Button from '../components/common/Button';
import Card from './common/Card';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from './common/Accordion';

import palette from '../lib/styles/palette';

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
  font-size: 0.75em;

  padding: 1rem;
  display: grid;
  grid-template-columns: 3fr;
  justify-content: center;
  grid-gap: 0.5rem;
  row-gap: 1.5rem;
`;

const SnsStyle = styled.div`
  display: grid;
  column-gap: 0rem;
  grid-template-columns: repeat(5, 1fr);
  place-items: center center;
`;

const Footer = () => {
  return (
    <Card big>
      <FooterStyle>
        <div
          style={{
            gridColumn: '1 / span 3',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          주의사항
        </div>
        <div style={{ gridColumn: '1 / span 3', textAlign: 'center' }}>
          gamealive 는 게임물관리위원회의 심의정보를 수집, 제공하는 웹
          사이트입니다.
          <br></br>
          <br></br>민간이 집계한 정보이므로 공식적 근거 자료로 활용할 수 없는 점
          유의 바랍니다.
        </div>
        <div
          style={{
            gridColumn: '1 / span 3',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          공유하기
        </div>
        <SnsStyle style={{ gridColumn: '1 / span 3' }}>
          <Button sns kakaotalk style={{ gridColumn: '1 / span 1`' }}>
            <Kakaotalk
              fill={`${palette.kakaotalk[2]}`}
              width="16"
              height="16"
            />
          </Button>
          <Button sns facebook style={{ gridColumn: '1 / span 1`' }}>
            <Facebook fill={`${palette.facebook[2]}`} width="16" height="16" />
          </Button>
          <Button sns twitter style={{ gridColumn: '1 / span 1`' }}>
            <Twitter fill={`${palette.twitter[2]}`} width="16" height="16" />
          </Button>
        </SnsStyle>
        <Accordion
          style={{
            gridColumn: '1 / span 3',
            textAlign: 'center',
          }}
        >
          <AccordionSummary style={{ fontWeight: 'bold' }}>
            저작권 표기
          </AccordionSummary>
          <AccordionDetails>
            <div>
              Icons made by{' '}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </AccordionDetails>
        </Accordion>
      </FooterStyle>
    </Card>
  );
};

export default Footer;
