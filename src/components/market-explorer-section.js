import * as React from "react";
import styled from "styled-components";
import ContainerCard from "./container-card";

const ExploreTheMarkets = styled.p`
  margin: 0;
`;
const LikeItIs = styled.span``;
const Playground = styled.span`
  color: var(--electric-green-primary);
`;
const ExploreTheMarketsContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const SearchForYour = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.09px;
`;
const ExploreTheMarketsLikeItIsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 368.3px;
  left: 3.91px;
  width: 1131px;
  height: 303px;
  object-fit: cover;
`;
const ChartIcon = styled.img`
  position: absolute;
  top: 20.3px;
  left: 122.91px;
  width: 892.37px;
  height: 445.79px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 170.3px;
  left: 137.91px;
  width: 802px;
  height: 430px;
  opacity: 0.3;
  mix-blend-mode: difference;
`;
const GroupItem = styled.img`
  position: absolute;
  top: 118.3px;
  left: 104.91px;
  width: 868px;
  height: 482px;
  opacity: 0.05;
  mix-blend-mode: difference;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 224.24px;
  left: 137.95px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 97.12%;
  top: 0%;
  bottom: 2.88%;
  left: calc(50% - 567.45px);
  max-height: 100%;
  width: 1087px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 1134.91px;
  height: 671.3px;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--neutrals-grey-91);
`;
const ExploreMarkets = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const ExploreMarketsWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-29xl);
  box-sizing: border-box;
  font-size: var(--mobile-title-3-medium-size);
  color: var(--color-black);
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-45xl);
  text-align: left;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const MarketExplorerSection = () => {
  return (
    <FrameParentRoot>
      <ExploreTheMarketsLikeItIsParent>
        <ExploreTheMarketsContainer>
          <ExploreTheMarkets>Explore the Markets</ExploreTheMarkets>
          <ExploreTheMarkets>
            <LikeItIs>{`like it is your `}</LikeItIs>
            <Playground>Playground.</Playground>
          </ExploreTheMarkets>
        </ExploreTheMarketsContainer>
        <SearchForYour>
          Search for your favorite coins and stay ahead of the market
        </SearchForYour>
      </ExploreTheMarketsLikeItIsParent>
      <RectangleParent>
        <RectangleIcon alt="" src="/rectangle@2x.png" />
        <ChartIcon alt="" src="/chart.svg" />
        <GroupChild alt="" src="/vector-1173.svg" />
        <GroupItem alt="" src="/vector-1174.svg" />
        <FrameGroup>
          <ContainerCard
            componentGroupImageUrl="/group-626505.svg"
            cryptoImageUrl="Bitcoin"
            symbolImageUrl="BTC/USDT"
            vectorImageUrl="/vector5.svg"
            numericValue="$25,776.80"
            assetImageUrl="https://coinmarketcap.com/currencies/bitcoin/#markets"
            contextText="_blank"
            financialValue="$8.5B"
            percentageText="23.1%"
          />
          <ContainerCard
            componentGroupImageUrl="/group-6265051.svg"
            cryptoImageUrl="Solana"
            symbolImageUrl="SOL/USDT"
            vectorImageUrl="/vector6.svg"
            numericValue="$18.07"
            financialValue="$372.8M"
            percentageText="02.1%"
            propHeight="33.94px"
            propTextDecoration="unset"
          />
          <ContainerCard
            componentGroupImageUrl="/group-6265052.svg"
            cryptoImageUrl="Ethereum"
            symbolImageUrl="ETH/USDT"
            vectorImageUrl="/vector5.svg"
            numericValue="$1,607.11"
            assetImageUrl="https://coinmarketcap.com/currencies/ethereum/#markets"
            contextText="_blank"
            financialValue="$4.6B"
            percentageText="12.1%"
            propHeight="28.25px"
            propTextDecoration="none"
          />
        </FrameGroup>
        <TextureIcon alt="" src="/texture1@2x.png" />
      </RectangleParent>
      <ExploreMarketsWrapper>
        <ExploreMarkets>Explore Markets</ExploreMarkets>
      </ExploreMarketsWrapper>
    </FrameParentRoot>
  );
};

export default MarketExplorerSection;
