import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// rating image
import all from '../../../resources/images/rating_all.gif';
import y12 from '../../../resources/images/rating_12.gif';
import y15 from '../../../resources/images/rating_15.gif';
import y18 from '../../../resources/images/rating_18.gif';
import reject from '../../../resources/images/icon_reject.gif';
import cancel1 from '../../../resources/images/icon_cancel1.gif';
import cancel2 from '../../../resources/images/icon_cancel2.gif';

const src = {
  all: all,
  y12: y12,
  y15: y15,
  y18: y18,
  reject: reject,
  cancel1: cancel1,
  cancel2: cancel2,
};

// review table cell
const Items = (props) => {
  const rating = () => {
    return src[props.rating];
  };

  return (
    <TableRow>
      <TableCell>{props.title}</TableCell>
      <TableCell>{props.applicant}</TableCell>
      <TableCell>
        <img src={rating(props)} alt={props.rating} />
      </TableCell>
    </TableRow>
  );
};

export default Items;
