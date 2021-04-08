import React from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

import Card from './common/Card';
import ReviewTable from '../components/table/ReviewTable';
import Button from './common/Button';

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
  justify-content: flex-start;
  align-items: center;
  font-size: small;
`;

// searcg form css
const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 3fr;
  column-gap: 0.5rem;
  row-gap: 1rem;
`;

const ReviewInfo = ({ review, loading, error, form, onChange, onSubmit }) => {
  if (error) {
    return <>오류 발생</>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  return (
    <Card big>
      <ReviewInfoStyle>
        <form onSubmit={onSubmit} autoComplete="off">
          <FormStyle>
            <TextField
              style={{ gridColumn: '1 / span 3' }}
              label="검색할 키워드를 입력하세요"
              value={form.keyword}
              name="keyword"
              onChange={onChange}
            />

            <TextField
              style={{ gridColumn: '1 / span 1' }}
              id="date"
              label="시작일"
              type="date"
              value={form.startdate}
              name="startdate"
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridColumn: '2 / span 1' }}
              id="date"
              label="종료일"
              type="date"
              name="enddate"
              value={form.enddate}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button teal type="submit" style={{ gridColumn: '3 / span 1' }}>
              검색
            </Button>
          </FormStyle>
        </form>
        <ReviewTable review={review} loading={loading} />
      </ReviewInfoStyle>
    </Card>
  );
};

export default ReviewInfo;
