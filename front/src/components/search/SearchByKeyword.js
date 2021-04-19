import React from 'react';
import styled from 'styled-components';
import qs from 'qs';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import { MdSearch } from 'react-icons/md';
import Card from '../common/Card';

const queryBuilder = (keyword, page) => {
  const query = qs.stringify({ keyword, page });
  return query;
};

const SearchFormStyle = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
`;

const SearchByKeyword = ({ form, onChange }) => {
  return (
    <Card search>
      <SearchFormStyle>
        <InputBase
          style={{ gridColumn: '1 / span 1' }}
          placeholder="검색"
          inputProps={{ 'aria-label': 'naked' }}
          value={form.keyword === 'undefined' ? '' : form.keyword}
          type="keyword"
          name="keyword"
          onChange={onChange}
        />
        <IconButton
          style={{ gridColumn: '2 / span 1' }}
          href={`?${queryBuilder(form.keyword, 1)}`}
        >
          <MdSearch />
        </IconButton>
      </SearchFormStyle>
    </Card>
  );
};

export default SearchByKeyword;
