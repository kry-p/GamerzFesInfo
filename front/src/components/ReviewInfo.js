import React from 'react';
import styled from 'styled-components';
import qs from 'qs';

import TextField from '@material-ui/core/TextField';

import Card from './common/Card';
import Search from './Search';
import ReviewTable from '../components/table/ReviewTable';

import IconButton from '@material-ui/core/IconButton';
import { MdSearch } from 'react-icons/md';

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
  grid-template-columns: 5fr 5fr 1fr;
  column-gap: 0.5rem;
  row-gap: 1rem;
`;

const queryBuilder = (startdate, enddate, page) => {
  const query = qs.stringify({ startdate, enddate, page });
  return query;
};

const Form = ({ form, onChange }) => {
  return (
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

      <IconButton href={`?${queryBuilder(form.startdate, form.enddate, 1)}`}>
        <MdSearch />
      </IconButton>
    </FormStyle>
  );
};

const CardStyle = styled(Card)`
  padding: 1.25rem;
`;

const ReviewInfo = ({ review, loading, error, form, onChange }) => {
  if (error) {
    return <>오류 발생</>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  return (
    <CardStyle big>
      <ReviewInfoStyle>
        <Search form={form} onChange={onChange} />
        <ReviewTable review={review} loading={loading} />
      </ReviewInfoStyle>
    </CardStyle>
  );
};

export default ReviewInfo;
