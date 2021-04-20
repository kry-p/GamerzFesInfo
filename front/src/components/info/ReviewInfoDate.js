import React from 'react';

import SearchByDate from '../search/SearchByDate';
import TableSkeleton from '../table/review/TableSkeleton';

import { ReviewInfoStyle, CardStyle } from './ReviewInfoStyle';

const ReviewInfoDate = ({ review, loading, error, form, onChange }) => {
  if (error) {
    return <>오류 발생</>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  return (
    <CardStyle big>
      <ReviewInfoStyle>
        <SearchByDate form={form} onChange={onChange} />
        <TableSkeleton review={review} loading={loading} />
      </ReviewInfoStyle>
    </CardStyle>
  );
};

export default ReviewInfoDate;
