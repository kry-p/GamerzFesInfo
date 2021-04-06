import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Review from './Review';

// let dataSource = [
//   {
//     applicant: '스마일게이트스토브',
//     title: 'The Sojourn(더 소전)',
//     code: 'GC-CC-NP-210319-001',
//     date: '2021-03-18',
//     rating: 'https://www.grac.or.kr/Images/grade_icon/rating_all.gif',
//   },
// ];

const ReviewItem = ({ review }) => {
  const { rating, date, code, title, applicant, _id } = review;
  return (
    <Review title={title} applicant={applicant} date={date} rating={rating} />
  );
};

const ReviewTable = ({ reviews, error, loading }) => {
  if (error) {
    return <>오류 발생</>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>게임물명</TableCell>
          <TableCell>신청자</TableCell>
          <TableCell>분류일자</TableCell>
          <TableCell>등급</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!loading && reviews && (
          <>
            {reviews.map((review) => (
              <ReviewItem review={review} />
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default ReviewTable;
