import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import Footer from "components/footers/SimpleFiveColumn.js";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import img1 from "../images/klinik/baby-treatments.jpg";
import img2 from "../images/klinik/bubble.jpg";
import img4 from "../images/klinik/Treatments1/img4.jpg";
import img6 from "../images/klinik/Treatments1/img6.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-16`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-center leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`grid flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block w-full mt-8 text-center`}
`;

export default () => {
  const cards = [
    {
      imageSrc: img6,
      type: "Harga",
      pricePerDay: "Rp. 55.000",
      title: "Refleksi ( Kaki & Tangan )",
    },
    {
      imageSrc: img1,
      type: "Harga",
      pricePerDay: "Rp. 70.000",
      title: "Refleksi Package",
    },
    {
      imageSrc: img1,
      type: "Harga",
      pricePerDay: "Rp. 125.000",
      title: "Kids Health ( Pijat Lulur Coklat )",
    },
    {
      imageSrc: img2,
      type: "Harga",
      pricePerDay: "-",
      title: "Happy Bubble :",
      additional: "",
      trendingText: "- Milky Bath ( 50K )",
      durationText: "- Foam Bath ( 50K )",
      locationText: "- Cocoa Bath ( 50K )",
    },
    {
      imageSrc: img4,
      type: "Harga",
      pricePerDay: "Rp. 50.000",
      title: "Totok Aura ( Free Animal Mask )",
    },
  ];
  return (
    <AnimationRevealPage>
      <Container>
        <Header />
        <Content>
          <HeadingTitle>Kids Treatment</HeadingTitle>
          <ThreeColumn>
            {cards.map((card, index) => (
              <CardColumn key={index}>
                <Card>
                  <CardImage imageSrc={card.imageSrc} />
                  <CardText>
                    <CardHeader>
                      {/* <CardType>{card.type}</CardType> */}
                      <CardPrice>
                        <CardPriceAmount>{card.pricePerDay}</CardPriceAmount>
                      </CardPrice>
                    </CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardMeta>
                      {card.additional && (
                        <>
                          <br />
                          {card.additional}
                        </>
                      )}
                      {card.trendingText && (
                        <CardMetaFeature>{card.trendingText}</CardMetaFeature>
                      )}
                      {card.durationText && (
                        <CardMetaFeature>{card.durationText}</CardMetaFeature>
                      )}
                      {card.locationText && (
                        <CardMetaFeature>{card.locationText}</CardMetaFeature>
                      )}
                    </CardMeta>
                    <CardAction
                      href="https://api.whatsapp.com/send?phone=6288225851990"
                      target="_blank"
                    >
                      Book Now
                    </CardAction>
                  </CardText>
                </Card>
              </CardColumn>
            ))}
          </ThreeColumn>
        </Content>
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
