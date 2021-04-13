import React from 'react';
import styled from 'styled-components';
import qs from 'qs';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import { MdSearch } from 'react-icons/md';

const queryBuilder = (startdate, enddate, page) => {
  const query = qs.stringify({ startdate, enddate, page });
  return query;
};

const SearchFormStyle = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 1fr;
  column-gap: 0.5rem;
  row-gap: 1rem;
`;

const Search = ({ form, onChange }) => {
  return (
    <SearchFormStyle>
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
    </SearchFormStyle>
  );
};

export default Search;
