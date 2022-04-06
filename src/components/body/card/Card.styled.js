import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 382px;
  height: 448px;
  background: ${props => props.itemLoading
          ? '#eaeaea'
          : '#FFFFFF'
  };
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  margin: 20px 0;
  cursor: pointer;
`;

export const Picture = styled.img`
  width: 382px;
  height: 235px;
  opacity: 0.9;
  border-radius: 16px 16px 0px 0px;
  margin-bottom: 15px;
  border: none;
`;

export const DateLine = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.0002px;
  text-transform: uppercase;
  color: #6A6A6A;
  margin: 16px 33px;
`;

export const Description = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin: 0 33px 33px;
`;
