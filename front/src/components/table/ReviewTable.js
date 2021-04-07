import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Review from './Review';

import { dateToString, stringToDate } from '../../modules/date';

const ReviewItem = ({ review }) => {
  const { rating, date, code, title, applicant, _id } = review;
  return (
    <Review title={title} applicant={applicant} date={date} rating={rating} />
  );
};

// const ReviewTable = () => {
//   const [reviews, setReviews] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         // 초기화
//         setError(null);
//         setReviews(null);

//         // loading 시작
//         setLoading(true);

//         const response = await axios.get('/api/review/list');

//         (async () => {
//           await response.data.map((item) => {
//             item.date = dateToString(new Date(item.date));
//             return item;
//           });
//         })();

//         setReviews(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//       }
//     })();
//   }, []);

//   if (error) {
//     return <>오류 발생</>;
//   }

//   if (loading) {
//     return <div>로드 중입니다.</div>;
//   }

//   return (
//     <>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell align={'center'}>게임물명</TableCell>
//             <TableCell align={'center'}>신청자</TableCell>
//             <TableCell align={'center'}>분류일</TableCell>
//             <TableCell align={'center'}>등급</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {!loading && reviews && (
//             <>
//               {reviews.map((review, index) => (
//                 <ReviewItem review={review} key={index} />
//               ))}
//             </>
//           )}
//         </TableBody>
//       </Table>
//     </>
//   );
// };

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
