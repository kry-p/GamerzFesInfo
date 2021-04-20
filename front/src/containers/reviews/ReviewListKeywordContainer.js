import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { changeField, listReviewKeyword } from '../../modules/review';
import ReviewInfoKeyword from '../../components/info/ReviewInfoKeyword';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

// redux-saga container for review information
const ReviewListKeywordContainer = ({ location }) => {
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
    loading: loading['review/LIST_REVIEW_KEYWORD'],
  }));

  useEffect(() => {
    const { keyword, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listReviewKeyword({ keyword, page }));
  }, [dispatch, location.search]);

  const queryHandler = (keyword, page) => {
    const word = keyword === 'undefined' ? '' : keyword;
    const query = qs.stringify({ word, page });

    return query;
  };

  return (
    <>
      <ReviewInfoKeyword
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
              to={`?${queryHandler(form.keyword, item.page)}`}
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

export default withRouter(ReviewListKeywordContainer);
