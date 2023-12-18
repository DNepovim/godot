import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { isLinkExternal } from "../../utils/isLinkExternal";
import { Button } from "../Button/Button";
import Hamburger from "hamburger-react";
import { theme } from "../../styles/theme";
import useOnClickOutside from "use-onclickoutside";
import Link from "next/link";
import { NavigationItem } from "./Navigation";

export const MobileNavigation: React.FC<{
  items: NavigationItem[];
  activeItem?: string;
}> = ({ items, activeItem }) => {
  const [isOpened, setIsOpened] = useState(false);
  const fixedItems = items.filter(({ showAlways, showAfterScroll }) => showAlways && showAfterScroll);
  const restItems = items.filter(({ showAlways }) => !showAlways);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpened(false));

  return (
    <>
      <NavWrapper ref={ref}>
        {fixedItems.length > 0 &&
          activeItem !== items[0].link &&
          fixedItems.map((item) => (
            <Button key={item.link} link={item.link} isSmall targetBlank={isLinkExternal(item.link)}>
              {item.title}
            </Button>
          ))}
        <NavList isOpened={isOpened} onClick={() => setIsOpened(false)}>
          {restItems.map((item) => (
            <NavItem key={item.link}>
              <NavLink href={item.link}>{item.title}</NavLink>
            </NavItem>
          ))}
        </NavList>
        <Hamburger color={theme.color.lightBlue} toggled={isOpened} onToggle={() => setIsOpened(!isOpened)} />
      </NavWrapper>
    </>
  );
};

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavItem = styled.li``;

const NavList = styled.ul(
  (props: { isOpened: boolean }) => `
  background-color: white;
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0 0 4px;
  transform: translateX(${props.isOpened ? 0 : 100}%);
  transition: transform 200ms;
`
);

const NavLink = styled(Link)`
  display: block;
  color: black;
  padding: 0.6em 1.6em;
`;
