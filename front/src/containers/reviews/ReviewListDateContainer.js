import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { changeField, listReviewDate } from '../../modules/review';
import ReviewInfoDate from '../../components/info/ReviewInfoDate';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

// redux-saga container for review information
const ReviewListDateContainer = ({ location }) => {
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

  const dispatch = useDispatch();
  const { review, error, loading } = useSelector(({ review, loading }) => ({
    review: review.review,
    error: review.error,
    loading: loading['review/LIST_REVIEW_DATE'],
  }));

  useEffect(() => {
    const { startdate, enddate, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listReviewDate({ startdate, enddate, page }));
  }, [dispatch, location.search]);

  const queryHandler = (startdate, enddate, page) => {
    const query = qs.stringify({ startdate, enddate, page });
    return query;
  };

  return (
    <>
      <ReviewInfoDate
        form={form}
        onChange={onChange}
        review={review}
        loading={loading}
        error={error}
      />
      {form.lastpage !== 0 ? (
        <Pagination
          page={form.currentpage}
          count={form.lastpage}
          siblingCount={0}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`?${queryHandler(form.startdate, form.enddate, item.page)}`}
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

export default withRouter(ReviewListDateContainer);
