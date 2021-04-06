import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listReviews } from '../../modules/reviews';
import ReviewTable from '../../components/table/ReviewTable';

const ReviewListContainer = ({ match }) => {
  //   const { startdate, enddate } = match.params;
  const dispatch = useDispatch();
  const { reviews, error, loading } = useSelector(({ reviews, loading }) => ({
    reviews: reviews.reviews,
    error: reviews.error,
    loading: loading['reviews/LIST_REVIEWS'],
  }));

  useEffect(() => {
    // dispatch(listReviews(startdate, enddate));
    dispatch(listReviews());
  }, [dispatch]);
  //   }, [dispatch, startdate, enddate]);

  return <ReviewTable reviews={reviews} loading={loading} error={error} />;
};

export default withRouter(ReviewListContainer);
