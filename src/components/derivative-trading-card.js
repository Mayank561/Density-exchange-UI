import * as React from "react";
import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100.5%;
  width: 99.99%;
  top: -0.25%;
  right: -0.1%;
  bottom: -0.25%;
  left: 0.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 102.19%;
  width: 103.43%;
  top: -1.1%;
  right: -1.81%;
  bottom: -1.1%;
  left: -1.61%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 59.02%;
  right: 98.99%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 4.29%;
  width: 1.01%;
  top: 23.13%;
  right: -1.01%;
  bottom: 72.58%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const GroupInner = styled.img`
  position: absolute;
  height: 31.14%;
  width: 43.42%;
  top: 0%;
  right: 31.38%;
  bottom: 68.86%;
  left: 25.2%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FutureOf = styled.p`
  margin: 0;
`;
const FutureOfDerivativeContainer = styled.div`
  position: absolute;
  top: 46.66%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupParent = styled.div`
  position: absolute;
  height: 40.51%;
  width: 54.63%;
  top: 24.9%;
  right: 22.54%;
  bottom: 34.59%;
  left: 22.83%;
`;
const VectorParentRoot = styled.div`
  position: relative;
  width: 276.38px;
  height: 560px;
  text-align: center;
  font-size: var(--font-size-14xl-5);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const DerivativeTradingCard = () => {
  return (
    <VectorParentRoot>
      <VectorIcon alt="" src="/vector.svg" />
      <VectorIcon1 alt="" src="/vector1.svg" />
      <GroupChild />
      <GroupItem />
      <GroupParent>
        <GroupInner alt="" src="/group-18145968.svg" />
        <FutureOfDerivativeContainer>
          <FutureOf>{`Future of `}</FutureOf>
          <FutureOf>{`Derivative `}</FutureOf>
          <FutureOf>Trading.</FutureOf>
        </FutureOfDerivativeContainer>
      </GroupParent>
    </VectorParentRoot>
  );
};

export default DerivativeTradingCard;
