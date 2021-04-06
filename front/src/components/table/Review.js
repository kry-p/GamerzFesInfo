import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Review = (props) => {
  return (
    <TableRow>
      <TableCell>{props.title}</TableCell>
      <TableCell>{props.applicant}</TableCell>
      <TableCell>{props.date}</TableCell>
      <TableCell>
        <img src={props.rating} alt="rating" />
      </TableCell>
    </TableRow>
  );
};

export default Review;
