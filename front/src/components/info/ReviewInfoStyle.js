import styled from 'styled-components';
import Card from '../common/Card';

// information css
export const ReviewInfoStyle = styled.div`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: TmoneyRoundWindRegular;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: small;
`;

export const CardStyle = styled(Card)`
  padding: 1.25rem;
`;

export const HintStyle = styled.div`
  padding: 1rem;
  font-size: 0.75rem;
`;
