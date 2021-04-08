import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, listReview } from '../../modules/review';
import ReviewInfo from '../../components/ReviewInfo';

// redux-saga container for review information
const ReviewListContainer = () => {
  // const { startdate, enddate } = match.params;
  const { form } = useSelector(({ review }) => ({
    form: review.search,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'search',
        key: name,
        value,
      }),
    );
  };

  const dispatch = useDispatch();
  const { review, error, loading } = useSelector(({ review, loading }) => ({
    review: review.review,
    error: review.error,
    loading: loading['review/LIST_REVIEW'],
  }));

  useEffect(() => {
    // dispatch(listReview(startdate, enddate));
    dispatch(listReview());
  }, [dispatch]);
  //   }, [dispatch, startdate, enddate]);

  return (
    <ReviewInfo
      form={form}
      onChange={onChange}
      review={review}
      loading={loading}
      error={error}
    />
  );
};

export default withRouter(ReviewListContainer);
