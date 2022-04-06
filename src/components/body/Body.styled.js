import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #FAFAFA;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`;

export const Title = styled.span`
  font-family: "Muller";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #222222;
  width: 100%;
  margin: 40px 0 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const ErrorText = styled.h1`
  text-align: center;
`;
