import React from 'react';
import styled from 'styled-components';

import Card from '../common/Card';
import SearchByDate from '../search/SearchByDate';
import Skeleton from '../table/review/Skeleton';

// information css
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
  justify-content: center;
  align-items: center;
  font-size: small;
`;

const CardStyle = styled(Card)`
  padding: 1.25rem;
`;

const ReviewInfoDate = ({ review, loading, error, form, onChange }) => {
  if (error) {
    return <>오류 발생</>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  return (
    <CardStyle big>
      <ReviewInfoStyle>
        <SearchByDate form={form} onChange={onChange} />
        <Skeleton review={review} loading={loading} />
      </ReviewInfoStyle>
    </CardStyle>
  );
};

export default ReviewInfoDate;
