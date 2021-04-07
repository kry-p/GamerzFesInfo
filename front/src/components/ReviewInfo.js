import React from 'react';
import Card from './common/Card';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import ReviewListContainer from '../containers/reviews/ReviewListContainer';
import ReviewTable from './table/ReviewTable';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from './common/Button';
import { dateToString } from '../modules/date';

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

const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 3fr;
  column-gap: 0.5rem;
  row-gap: 1rem;
`;

const ReviewInfo = () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 6);
  const startDateString = dateToString(startDate);
  const endDateString = dateToString(new Date());

  return (
    <Card big>
      <ReviewInfoStyle>
        <form autoComplete="off">
          <FormStyle>
            <TextField
              style={{ gridColumn: '1 / span 3' }}
              label="검색할 키워드를 입력하세요"
            />

            <TextField
              style={{ gridColumn: '1 / span 1' }}
              id="date"
              label="시작일"
              type="date"
              defaultValue={startDateString}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridColumn: '2 / span 1' }}
              id="date"
              label="종료일"
              type="date"
              defaultValue={endDateString}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button teal type="submit" style={{ gridColumn: '3 / span 1' }}>
              검색
            </Button>
          </FormStyle>
        </form>
        <ReviewListContainer />
      </ReviewInfoStyle>
    </Card>
  );
};

export default ReviewInfo;
