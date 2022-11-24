import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo.svg";
import logo from "../../images/klinik/logo_klinik.png";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as WhatsappIcon } from "../../images/whatsapp.svg";

const Container = tw.div`relative bg-primary-500 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5 text-center md:text-left w-full mb-10`;
const WideColumn = tw(
  Column
)`text-center md:text-left w-full md:w-1/4 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-100 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Rumah Sehat Harapan Bunda</LogoText>
          </LogoContainer>
          <CompanyDescription>
            RSHB Berfokus pada pelayanan klinik kecantikan kualitas tinggi,
            memberikan perawatan unggulan terbaik, terdepan, dan terpercaya di
            Indonesia.
          </CompanyDescription>
          <SocialLinksContainer>
            Developed by{" "}
            <a href="https://landing-r4tzn4thf-ngoidetech.vercel.app/" target="_blank" tw="text-blue-700 underline">
              NgoideTech
            </a>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Operational Hours</ColumnHeading>
          <br />
          <p>
            Monday - Sunday <br />
            Sukabumi 08.00-18.00 <br />
            (Please book your reservation before your visit treatment)
          </p>
        </Column>
        <Column>
          <ColumnHeading>Contact info</ColumnHeading>
          <br />
          <p>
            Sukabumi <br />
            Cibadak, Jawa Barat <br />
            Jl. Karang hilir No. 815 <br />
            ( depan gerbang SMK Kesehatan harapan bunda) <br />
            kec. Cibadak kab. Sukabumi
          </p>
        </Column>
        <Column>
          <ColumnHeading>Reservation </ColumnHeading>
          <br />
          <LogoContainer>
            <InstagramIcon />
            <div>rumahsehatharapanbundarshb</div>
          </LogoContainer>
          <br />
          <LogoContainer>
            <WhatsappIcon />
            <div>+62 882-2585-1990</div>
          </LogoContainer>
        </Column>
      </FiveColumns>
    </Container>
  );
};
