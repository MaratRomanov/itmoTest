import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  height: 90vh;
  margin-bottom: calc(10vh - 40px);
`;

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const ButtonClose = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  float: right;
  position: relative;
  top: 20px;
  background-color: black;
`;
