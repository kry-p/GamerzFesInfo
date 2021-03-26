import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive.js';
import Button from './Button.js.bak';
import palette from '../../lib/styles/palette';
import { AiOutlineMenu, AiFillBell } from 'react-icons/ai';
import Card from './Card.js.bak';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  /* height: 4rem; */
  flex: 1;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .left.right {
    /* display: flex; */
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
  margin-bottom: 1.5rem;
`;

const Header = () => {
  return (
    <>
      <Card className="header">
        <Wrapper>
          <div className="left">
            <Button icon>
              <AiFillBell color={`${palette.teal[5]}`} />
            </Button>
          </div>
          <div className="logo">실시간 심의정보</div>
          <div className="right">
            <Button icon>
              <AiOutlineMenu color={`${palette.teal[5]}`} />
            </Button>
          </div>
        </Wrapper>
      </Card>
      {/* <HeaderBlock>
        <Wrapper>
          <div className="left">
            <Button teal></Button>
          </div>
          <div className="logo">실시간 심의정보</div>
          <div className="right">
            <Button icon>
              <AiOutlineMenu color={`${palette.teal[5]}`} />
            </Button>
          </div>
        </Wrapper>
      </HeaderBlock> */}
    </>
  );
};

export default Header;
