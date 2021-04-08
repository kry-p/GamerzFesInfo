import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { changeField, listReview } from '../../modules/review';
import ReviewInfo from '../../components/ReviewInfo';

// redux-saga container for review information
const ReviewListContainer = ({ location }) => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('e');
  };

  const dispatch = useDispatch();
  const { review, error, loading } = useSelector(({ review, loading }) => ({
    review: review.review,
    error: review.error,
    loading: loading['review/LIST_REVIEW'],
  }));

  useEffect(() => {
    const { startdate, enddate } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listReview({ startdate, enddate }));
  }, [dispatch, location.search]);

  return (
    <ReviewInfo
      form={form}
      onChange={onChange}
      review={review}
      loading={loading}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(ReviewListContainer);
