"use client";
import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import useScrollPosition from "@react-hook/window-scroll";
import { theme } from "../../styles/theme";
import { underline } from "../../styles/utils";
import { ShowOnDesktop, ShowOnMobile } from "../ShowOnMobile/ShowOnMobile";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { Container } from "../Container/Container";
import Link from "next/link";

export interface NavigationItem {
  title: string;
  link: string;
  isButton?: boolean;
  showAlways?: boolean;
  showAfterScroll?: boolean;
  isHidden?: boolean;
}

export const Navigation: React.FC<{
  title?: string;
  items: NavigationItem[];
}> = ({ title, items }) => {
  const [activeItem, setActiveItem] = useState<string | undefined>();
  const scrollPosition = useScrollPosition();
  const anchorLinks = items.filter(({ link }) => link.startsWith("#"));
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (document.body.scrollHeight - (scrollPosition + window.innerHeight) < 100) {
        setActiveItem(anchorLinks[anchorLinks.length - 1].link);
        return;
      }
      setActiveItem(
        anchorLinks.reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link.substring(1));
          if (!block) {
            return acc;
          }
          const { top } = block.getBoundingClientRect();
          return top < 100 ? item.link : acc;
        }, undefined)
      );
    },
    [anchorLinks, scrollPosition]
  );
  useEffect(() => {
    onScrollHandler(scrollPosition);
  }, [onScrollHandler, scrollPosition]);
  return (
    <NavBar>
      <NavContainer>
        <Nav>
          {activeItem && activeItem !== items[0].link && (
            <LogoWrapper>
              <ImageWrapper>
                <Image src="../../images/logo.svg" alt="logo" />
              </ImageWrapper>
              {title && <Title href={items[0].link}>{title}</Title>}
            </LogoWrapper>
          )}
          <NavList>
            <ShowOnDesktop>
              <DesktopNavigation items={items} activeItem={activeItem} />
            </ShowOnDesktop>
            <ShowOnMobile>
              <MobileNavigation items={items} activeItem={activeItem} />
            </ShowOnMobile>
          </NavList>
        </Nav>
      </NavContainer>
    </NavBar>
  );
};

const NavBar = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.color.background};
  width: 100vw;
  border-bottom: 2px solid ${theme.color.brown};
`;

const NavContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.2em;
`;

const Title = styled(Link)`
  display: flex;
  margin: 0;
  font-size: 1em;
  font-family: ${theme.fonts.headings};
  color: ${theme.color.darkBlue};
  ${underline(theme.color.yellow, 4)}

  @media (min-width: 400px) {
    font-size: 1.4em;
  }
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto 0 0;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 3.6rem;
  padding: 0.4rem 1rem 0.4rem 0;
  box-sizing: border-box;
`;

const Image = styled.img`
  max-height: 100%;
  height: auto;
`;
