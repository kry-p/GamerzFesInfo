import React from 'react';
import Card from './common/Card';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import ReviewListContainer from '../containers/reviews/ReviewListContainer';

// import { Table } from 'antd';

const ReviewInfoStyle = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: TmoneyRoundWindRegular;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: small;
`;

const ReviewInfo = () => {
  return (
    <Card big>
      <ReviewInfoStyle>
        <ReviewListContainer />
      </ReviewInfoStyle>
    </Card>
  );
};

export default ReviewInfo;
