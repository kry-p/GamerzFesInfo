import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Review from './Review';

const client = axios.create();

const ReviewItem = ({ review }) => {
  const { rating, date, code, title, applicant, _id } = review;
  return (
    <Review title={title} applicant={applicant} date={date} rating={rating} />
  );
};

const ReviewTable = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // 초기화
        setError(null);
        setReviews(null);

        // loading 시작
        setLoading(true);

        const response = await axios.get(
          'http://localhost:4000/api/review/list',
        );
        setReviews(response.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

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

// const ReviewTable = ({ reviews, error, loading }) => {
//   if (error) {
//     return <>오류 발생</>;
//   }

//   if (loading) {
//     return <>로딩중</>;
//   }

//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>게임물명</TableCell>
//           <TableCell>신청자</TableCell>
//           <TableCell>분류일자</TableCell>
//           <TableCell>등급</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {!loading && reviews && (
//           <>
//             {reviews.map((review) => (
//               <ReviewItem review={review} />
//             ))}
//           </>
//         )}
//       </TableBody>
//     </Table>
//   );
// };

export default ReviewTable;
