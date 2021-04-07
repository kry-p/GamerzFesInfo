import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listReview } from '../../modules/review';
import ReviewTable from '../../components/table/ReviewTable';

// redux-saga container for review information
const ReviewListContainer = () => {
  //   const { startdate, enddate } = match.params;
  const dispatch = useDispatch();
  const { review, error, loading } = useSelector(({ review, loading }) => ({
    review: review.review,
    error: review.error,
    loading: loading['review/LIST_REVIEW'],
  }));

  useEffect(() => {
    // dispatch(listReviews(startdate, enddate));
    dispatch(listReview());
  }, [dispatch]);
  //   }, [dispatch, startdate, enddate]);

  return <ReviewTable review={review} loading={loading} error={error} />;
};

export default withRouter(ReviewListContainer);
