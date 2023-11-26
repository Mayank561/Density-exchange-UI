import * as React from "react";
import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100.44%;
  width: 99.99%;
  top: -0.25%;
  right: -0.1%;
  bottom: -0.2%;
  left: 0.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 102.14%;
  width: 103.58%;
  top: -1.04%;
  right: -1.79%;
  bottom: -1.1%;
  left: -1.79%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 1.45%;
  width: 2.41%;
  top: 29.24%;
  right: 62.67%;
  bottom: 69.31%;
  left: 34.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 24.41%;
  right: 55.86%;
  bottom: 75.25%;
  left: 43.44%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 34.54%;
  right: 60.91%;
  bottom: 65.11%;
  left: 38.39%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupInner = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 38.9%;
  right: 55.69%;
  bottom: 60.76%;
  left: 43.62%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const EllipseDiv = styled.div`
  position: absolute;
  height: 0.19%;
  width: 0.39%;
  top: 37.82%;
  right: 42.74%;
  bottom: 61.99%;
  left: 56.87%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild1 = styled.div`
  position: absolute;
  height: 0.55%;
  width: 1.12%;
  top: 25.78%;
  right: 41.51%;
  bottom: 73.67%;
  left: 57.37%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild2 = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 58.99%;
  right: 98.99%;
  bottom: 37.92%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupChild3 = styled.div`
  position: absolute;
  height: 4.28%;
  width: 1.01%;
  top: 23.12%;
  right: -1.01%;
  bottom: 72.6%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const IsNowHere = styled.p`
  margin: 0;
`;
const IsNowHereContainer = styled.div`
  position: absolute;
  top: 57.5%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 35.41%;
  width: 43.25%;
  top: 0%;
  right: 27.17%;
  bottom: 64.59%;
  left: 29.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IsNowHereForYouParent = styled.div`
  position: absolute;
  height: 34.02%;
  width: 64.04%;
  top: 25.78%;
  right: 17.98%;
  bottom: 40.2%;
  left: 17.98%;
`;
const VectorParentRoot = styled.div`
  position: relative;
  width: 276.38px;
  height: 560.3px;
  text-align: center;
  font-size: var(--font-size-14xl-5);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const ContainerCard1 = () => {
  return (
    <VectorParentRoot>
      <VectorIcon alt="" src="/vector2.svg" />
      <VectorIcon1 alt="" src="/vector3.svg" />
      <VectorIcon2 alt="" src="/vector4.svg" />
      <GroupChild />
      <GroupItem />
      <GroupInner />
      <EllipseDiv />
      <GroupChild1 />
      <GroupChild2 />
      <GroupChild3 />
      <IsNowHereForYouParent>
        <IsNowHereContainer>
          <IsNowHere>{`Is now here, `}</IsNowHere>
          <IsNowHere>for you.</IsNowHere>
        </IsNowHereContainer>
        <GroupIcon alt="" src="/group-626832.svg" />
      </IsNowHereForYouParent>
    </VectorParentRoot>
  );
};

export default ContainerCard1;
