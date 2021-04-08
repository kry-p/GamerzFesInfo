import qs from 'qs';
import client from './client';

// 심의정보 검색
export const list = ({ startdate, enddate }) => {
  const queryString = qs.stringify({ startdate, enddate });

  return client.get(`/api/review/list?${queryString}`);
};

// // 최근 일주일 조회(기본값)
// export const list = () => {
//   return client.get('/api/review/list');
// };
