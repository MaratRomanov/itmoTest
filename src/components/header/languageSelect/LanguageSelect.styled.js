import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 24px;
  width: 24px;
`;

export const Text = styled.span`
  margin: 0 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 48px;
`;

export const DropdownButton = styled.img`
  width: 10px;
  height: 5px;
  transform: ${props => props.isShown
          ? 'rotate(180deg)'
          : ''
  };
`;

export const DropdownLanguageses = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 40px;
`;

export const DropdownLanguagesesElement = styled.div`
  width: 76px;
  height: 33px;
  background: #FFFFFF;
  color: #222222;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: #F2F4FF;
  }
`;
