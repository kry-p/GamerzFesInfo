import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// color
import palette from '../../lib/styles/palette';

// button css
const buttonStyle = css`
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  /* 
   * prop for sns icons
   */

  // common
  ${(props) =>
    props.sns &&
    css`
      margin-top: 0.5rem;
      padding: 0rem;
      width: 2rem;
      height: 2rem;
    `}
  // kakaotalk
  ${(props) =>
    props.kakaotalk &&
    css`
      background: ${palette.kakaotalk[0]};
      &:hover {
        background: ${palette.kakaotalk[1]};
      }
    `}
  // facebook
  ${(props) =>
    props.facebook &&
    css`
      background: ${palette.facebook[0]};
      &:hover {
        background: ${palette.facebook[1]};
      }
    `}
  // twitter
  ${(props) =>
    props.twitter &&
    css`
      background: ${palette.twitter[0]};
      &:hover {
        background: ${palette.twitter[1]};
      }
    `}
  
  // size
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  // icon image
  ${(props) =>
    props.icon &&
    css`
      background: rgba(0, 0, 0, 0);
      margin-top: 0.25rem;
      padding: 0rem;
      color: ${palette.gray[5]};
      &:hover {
        background: rgba(0, 0, 0, 0);
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
