import React from 'react';
import styled, { css } from 'styled-components';

// color
import palette from '../../lib/styles/palette';

// card css
const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;
  box-sizing: border-box;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);

  animation: fadein 2s;
  -moz-animation: fadein 2s;
  /* Firefox */
  -webkit-animation: fadein 2s;
  /* Safari and Chrome */
  -o-animation: fadein 2s;
  /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(props) =>
    props.mainColor &&
    css`
      background-color: ${palette.logo_base[0]};
    `}

  ${(props) =>
    props.subColor &&
    css`
      background-color: ${palette.logo_base[1]};
    `}

  ${(props) =>
    props.search &&
    css`
      background-color: ${palette.gray[0]};
      margin: 0;
      padding-left: 1rem;
      padding-right: 0rem;
      padding-top: 0rem;
      padding-bottom: 0rem;
    `}

  ${(props) =>
    props.header &&
    css`
      padding: 0.25rem;
    `}

  ${(props) =>
    props.small &&
    css`
      @media (max-width: 384px) {
        width: 80%;
      }

      @media (min-width: 384px) {
        width: 307px;
      }
    `}

    ${(props) =>
    props.big &&
    css`
      @media (max-width: 384px) {
        width: 100%;
      }

      @media (min-width: 384px) {
        width: 384px;
      }
    `}
`;

const Card = (props) => {
  return <CardStyle {...props} />;
};

export default Card;
