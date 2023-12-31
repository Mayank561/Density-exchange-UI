import * as React from "react";
import styled from "styled-components";

const GetStartedNow = styled.b`
  position: absolute;
  bottom: 1069.58px;
  left: 0px;
  letter-spacing: -2.78px;
  background: linear-gradient(176.64deg, #fff, rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const GroupChild = styled.img`
  position: absolute;
  bottom: -7.65px;
  left: 225.35px;
  width: 557.31px;
  height: 1124.35px;
`;
const GroupItem = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: var(--color-mediumspringgreen-200);
  filter: blur(51.49px);
  width: 875.97px;
  height: 142.63px;
  opacity: 0.6;
`;
const StartTrading = styled.b`
  position: relative;
`;
const Cta = styled.div`
  position: absolute;
  bottom: 6.26px;
  left: 4.87px;
  background: linear-gradient(
    268.92deg,
    #d4f938 43.75%,
    rgba(50, 216, 117, 0.96)
  );
  width: 866.23px;
  height: 134.98px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11.13222599029541px 33.39667892456055px;
  box-sizing: border-box;
`;
const RectangleParent = styled.div`
  position: absolute;
  bottom: 58.44px;
  left: 67px;
  width: 875.97px;
  height: 142.63px;
  font-size: 38.27px;
`;
const GetStartedNowParent = styled.div`
  position: relative;
  width: 1011px;
  height: 1228.58px;
`;
const LandingPageInnerRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-141xl) 0px;
  text-align: left;
  font-size: var(--font-size-113xl-2);
  color: var(--color-black);
  font-family: var(--mobile-caption-1-medium);
`;

const SectionForm = () => {
  return (
    <LandingPageInnerRoot>
      <GetStartedNowParent>
        <GetStartedNow>Get started now.</GetStartedNow>
        <GroupChild alt="" src="/group-1000003804.svg" />
        <RectangleParent>
          <GroupItem />
          <Cta>
            <StartTrading>Start Trading!</StartTrading>
          </Cta>
        </RectangleParent>
      </GetStartedNowParent>
    </LandingPageInnerRoot>
  );
};

export default SectionForm;
