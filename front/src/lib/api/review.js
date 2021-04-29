import qs from 'qs';
import client from './client';

// 심의정보 검색 (날짜 기반)
export const listbydate = ({ startdate, enddate, page, cancel, reject }) => {
  const queryString = qs.stringify({
    startdate,
    enddate,
    page,
    cancel,
    reject,
  });

  return client.get(`/api/review/listbydate?${queryString}`);
};

// 심의정보 검색 (키워드 기반)
export const listbykeyword = ({ keyword, page, cancel, reject }) => {
  const queryString = qs.stringify({ keyword, page, cancel, reject });

  return client.get(`/api/review/listbykeyword?${queryString}`);
};
