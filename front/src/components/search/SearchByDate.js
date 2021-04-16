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
  grid-template-columns: 6fr 6fr 1fr;
  place-content: space-between center;
  grid-gap: 0.5rem;
  gap: 0.5rem;
`;

const SearchByDate = ({ form, onChange }) => {
  return (
    // <Card search>
    <SearchFormStyle>
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
      {/* <InputBase
          style={{ gridColumn: '1 / span 1' }}
          placeholder="검색할 내용을 입력하세요"
          inputProps={{ 'aria-label': 'naked' }}
          value={form.startdate}
          type="date"
          name="startdate"
          onChange={onChange}
        />
        <InputBase
          style={{ gridColumn: '2 / span 1' }}
          placeholder="검색할 내용을 입력하세요"
          inputProps={{ 'aria-label': 'naked' }}
          value={form.enddate}
          type="date"
          name="enddate"
          onChange={onChange}
        /> */}
      <IconButton
        style={{ gridColumn: '3 / span 1' }}
        href={`?${queryBuilder(form.startdate, form.enddate, 1)}`}
      >
        <MdSearch />
      </IconButton>
    </SearchFormStyle>
    // </Card>
    /* <TextField
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
      <IconButton
        style={{ gridColumn: '3 / span 1' }}
        href={`?${queryBuilder(form.startdate, form.enddate, 1)}`}
      >
        <MdSearch />
      </IconButton> */
  );
};

export default SearchByDate;
