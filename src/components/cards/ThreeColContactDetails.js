import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = null,
  heading = "Tempat Kami",
  subheading = "Lokasi",
  description = "Rumah sehat harapan bunda berlokasi di Jl. Karang hilir No. 815 ( depan gerbang SMK Kesehatan harapan bunda) kec. Cibadak kab. Sukabumi",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Reliable",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Easy",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Customizable",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Fast",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <div className="bisylms-map">
          <iframe title="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4829807960512!2d106.801
          03096008862!3d-6.894674951027934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x2e68319a69bedac1%3A0x47a974d5252c7a84!2sRumah%20sehat%20harapan%20bund
          a!5e0!3m2!1sid!2sid!4v1662374547018!5m2!1sid!2sid"></iframe>
        </div>
      <DecoratorBlob />
    </Container>
  );
};
