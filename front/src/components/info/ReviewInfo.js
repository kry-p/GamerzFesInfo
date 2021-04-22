import React from 'react';

import SearchByDate from '../search/SearchByDate';
import SearchByKeyword from '../search/SearchByKeyword';
import TableSkeleton from '../table/review/TableSkeleton';

import { ReviewInfoStyle, CardStyle, HintStyle } from './ReviewInfoStyle';

const ReviewInfo = ({ type, review, loading, error, form, onChange }) => {
  let result = null;

  if (error) {
    result = (
      <div style={{ padding: '2rem' }}>
        오류가 발생했습니다. 일시적 서버 문제일 수 있습니다.
      </div>
    );
  } else if (loading) {
    result = (
      <>
        <TableSkeleton review={null} loading={loading} />
        <div style={{ padding: '2rem' }}>로드 중입니다.</div>
      </>
    );
  } else {
    result = (
      <>
        {Array.isArray(review) && review.length === 0 ? (
          <div style={{ padding: '2rem' }}>찾는 내용이 없습니다.</div>
        ) : (
          <TableSkeleton review={review} loading={loading} />
        )}
      </>
    );
  }

  return (
    <CardStyle big>
      <ReviewInfoStyle>
        {type === 'date' ? (
          <>
            <SearchByDate form={form} onChange={onChange} />
            <HintStyle>
              키워드로 찾고 싶으신가요? <a href="/">키워드로 검색하기</a>
            </HintStyle>
          </>
        ) : (
          <></>
        )}
        {type === 'keyword' ? (
          <>
            <SearchByKeyword form={form} onChange={onChange} />
            <HintStyle>
              날짜로 찾고 싶으신가요? <a href="/search/date">날짜로 검색하기</a>
            </HintStyle>
          </>
        ) : (
          <></>
        )}

        {result}
      </ReviewInfoStyle>
    </CardStyle>
  );
};

export default ReviewInfo;
