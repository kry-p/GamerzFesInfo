import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Review from './Review';

// table items using redux-saga
const ReviewItem = ({ review }) => {
  const { rating, date, title, applicant } = review;
  return (
    <Review title={title} applicant={applicant} date={date} rating={rating} />
  );
};

// table element
const ReviewTable = ({ review, loading, error }) => {
  if (error) {
    return <>오류 발생</>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>게임물명</TableCell>
            <TableCell align={'center'}>신청자</TableCell>
            <TableCell align={'center'}>분류일</TableCell>
            <TableCell align={'center'}>등급</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && review && (
            <>
              {review.map((data, index) => (
                <ReviewItem review={data} key={index} />
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ReviewTable;
