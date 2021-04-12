import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { changeField, listReviewDate } from '../../modules/review';
import ReviewInfo from '../../components/ReviewInfo';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

// redux-saga container for review information
const ReviewListContainer = ({ location }) => {
  const { form } = useSelector(({ review }) => ({
    form: review,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
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
    const { startdate, enddate, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listReviewDate({ startdate, enddate, page }));
  }, [dispatch, location.search]);

  const handleChange = (event, value) => {
    console.log(event, value);
  };

  const queryBuilder = (startdate, enddate, page) => {
    const query = qs.stringify({ startdate, enddate, page });
    return query;
  };

  return (
    <>
      <ReviewInfo
        form={form}
        onChange={onChange}
        review={review}
        loading={loading}
        onSubmit={onSubmit}
        error={error}
      />
      {form.lastpage !== 0 ? (
        <Pagination
          count={form.lastpage}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${
                item.page === 1
                  ? ''
                  : `?${queryBuilder(form.startdate, form.enddate, item.page)}`
              }`}
              {...item}
            />
          )}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default withRouter(ReviewListContainer);
