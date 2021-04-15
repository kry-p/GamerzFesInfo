import React from 'react';
import styled from 'styled-components';

// rating image
import all from '../../resources/images/rating_all.gif';
import y12 from '../../resources/images/rating_12.gif';
import y15 from '../../resources/images/rating_15.gif';
import y18 from '../../resources/images/rating_18.gif';
import reject from '../../resources/images/icon_reject.gif';
import cancel1 from '../../resources/images/icon_cancel1.gif';
import cancel2 from '../../resources/images/icon_cancel2.gif';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';

const RatingInfoStyle = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(7, 2.5rem);
  column-gap: 0.25rem;
  row-gap: 0.5rem;
  align-items: center;
  justify-items: center;
  font-size: 0.5em;
`;

const RatingInfo = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        등급정보
      </AccordionSummary>
      <AccordionDetails>
        <RatingInfoStyle>
          <img src={all} style={{ gridColumn: '1 / span 1' }} alt="image_all" />
          <img src={y12} style={{ gridColumn: '2 / span 1' }} alt="image_12" />
          <img src={y15} style={{ gridColumn: '3 / span 1' }} alt="image_15" />
          <img src={y18} style={{ gridColumn: '4 / span 1' }} alt="image_18" />
          <img
            src={reject}
            style={{ gridColumn: '5 / span 1' }}
            alt="image_reject"
          />
          <img
            src={cancel1}
            style={{ gridColumn: '6 / span 1' }}
            alt="image_cancel1"
          />
          <img
            src={cancel2}
            style={{ gridColumn: '7 / span 1' }}
            alt="image_cancel2"
          />

          <div style={{ gridColumn: '1 / span 1' }}>전체</div>
          <div style={{ gridColumn: '2 / span 1' }}>12세</div>
          <div style={{ gridColumn: '3 / span 1' }}>15세</div>
          <div style={{ gridColumn: '4 / span 1' }}>18세</div>
          <div style={{ gridColumn: '5 / span 1' }}>분류거부</div>
          <div style={{ gridColumn: '6 / span 1' }}>취소예정</div>
          <div style={{ gridColumn: '7 / span 1' }}>취소</div>
        </RatingInfoStyle>
      </AccordionDetails>
    </Accordion>
  );
};

export default RatingInfo;
