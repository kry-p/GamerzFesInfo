import qs from 'qs';
import client from './client';

// 심의정보 조회
// export const list = ({ startdate, enddate }) => {
//   const queryString = qs.stringify({ startdate, enddate });

//   return client.get(`/api/review/list?${queryString}`);
// };

export const list = () => {
  return client.get(`/api/review/list`);
};
