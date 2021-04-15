import qs from 'qs';
import client from './client';

// 심의정보 검색 (날짜 기반)
export const listbydate = ({ startdate, enddate, page }) => {
  const queryString = qs.stringify({ startdate, enddate, page });

  return client.get(`/api/review/listbydate?${queryString}`);
};

// 심의정보 검색 (키워드 기반)
export const listbykeyword = ({ keyword, page }) => {
  const queryString = qs.stringify({ keyword, page });

  return client.get(`/api/review/listbykeyword?${queryString}`);
};
