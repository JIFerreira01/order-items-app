import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: calc(100% + 30px);
  margin-left: -15px;
  margin-right: -15px;
  appearance: none;
  & > ::-webkit-slider-thumb {
      appearance: none;
      -moz-appearance: none;
      height: 11px;
      width: 11px;
      border-radius: 50%;
      background: #F47120;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;
