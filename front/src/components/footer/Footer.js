import React from 'react';
import Helmet from 'react-helmet';
import { ReactComponent as Kakaotalk } from '../../resources/sns/kakaotalk.svg';
import { ReactComponent as Facebook } from '../../resources/sns/facebook.svg';
import { ReactComponent as Twitter } from '../../resources/sns/twitter.svg';
import { ReactComponent as Blog } from '../../resources/sns/blog.svg';
import { ReactComponent as Link } from '../../resources/sns/link.svg';

import Button from '../common/Button';
import Card from '../common/Card';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '../common/Accordion';

import palette from '../../lib/styles/palette';
import {
  FooterStyle,
  SnsStyle,
  TitleStyle,
  DescriptionStyle,
} from './FooterComponentStyle';
import KakaoShareButton from './KakaoShareButton';

// SNS share component
const Sns = (
  <>
    <Helmet>
      <script src="https://developers.kakao.com/sdk/js/kakao.js" />
    </Helmet>
    <TitleStyle>공유하기</TitleStyle>
    <SnsStyle>
      <KakaoShareButton />
      {/* <Button sns kakaotalk style={{ gridColumn: '1 / span 1`' }}>
        <Kakaotalk fill={`${palette.kakaotalk[2]}`} width="16" height="16" />
      </Button> */}
      <Button sns facebook style={{ gridColumn: '1 / span 1`' }}>
        <Facebook fill={`${palette.facebook[2]}`} width="16" height="16" />
      </Button>
      <Button sns twitter style={{ gridColumn: '1 / span 1`' }}>
        <Twitter fill={`${palette.twitter[2]}`} width="16" height="16" />
      </Button>
      <Button sns blog style={{ gridColumn: '1 / span 1`' }}>
        <Blog fill={`${palette.naverblog[2]}`} width="16" height="16" />
      </Button>
      <Button sns link style={{ gridColumn: '1 / span 1`' }}>
        <Link fill={`${palette.link[2]}`} width="16" height="16" />
      </Button>
    </SnsStyle>
  </>
);

// Disclaimer component
const Disclaimer = (
  <>
    <TitleStyle>주의사항</TitleStyle>
    <DescriptionStyle>
      gamealive 는 게임물관리위원회의 심의정보를 수집, 제공하는 웹 사이트입니다.
      <br></br>
      <br></br>민간이 집계한 정보이므로 공식적 근거 자료로 활용할 수 없는 점
      유의 바랍니다.
    </DescriptionStyle>
  </>
);

// Contact component
const Contact = (
  <>
    <TitleStyle>문의하기</TitleStyle>
    <DescriptionStyle>
      <a href="mailto: game.alive.kr@gmail.com">game.alive.kr@gmail.com</a>
    </DescriptionStyle>
  </>
);

// Copyright component
const Copyright = (
  <>
    <Accordion
      style={{
        gridColumn: '1 / span 3',
        textAlign: 'center',
      }}
    >
      <AccordionSummary style={{ fontWeight: 'bold' }}>
        저작권 표기
      </AccordionSummary>
      <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div>
          모든 소스 코드는{' '}
          <a href="https://github.com/kry-p/GamerzFesInfo">GitHub</a>에 공개되어
          있으며 MIT 라이선스에 의거 자유롭게 사용하실 수 있습니다.
        </div>
      </AccordionDetails>
    </Accordion>
  </>
);

// main
const Footer = () => {
  return (
    <Card big>
      <FooterStyle>
        {Disclaimer}
        {Sns}
        {Contact}
        {Copyright}
      </FooterStyle>
    </Card>
  );
};

export default Footer;
