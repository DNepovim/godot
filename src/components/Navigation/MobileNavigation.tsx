import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { useState } from "react"
import { isLinkExternal } from "../../utils/isLinkExternal"
import { Button } from "../Button/Button"
import { NavigationItem } from "../../data"
import Hamburger from "hamburger-react"
import { theme } from "../../styles/theme"

export const MobileNavigation: React.FC<{
  items: NavigationItem[]
  activeItem?: string
}> = ({ items, activeItem }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      {items
        .filter((item) => item.showAlways)
        .filter((item) =>
          activeItem === items[0].link ? !item.showAfterScroll : true
        ) && (
        <NavWrapper>
          {items
            .filter((item) => item.showAlways)
            .filter((item) =>
              activeItem && activeItem === items[0].link
                ? !item.showAfterScroll
                : true
            )
            .map((item) => (
              <Button
                key={item.link}
                link={item.link}
                isSmall
                targetBlank={isLinkExternal(item.link)}
              >
                {item.title}
              </Button>
            ))}
        </NavWrapper>
      )}
      <NavList isOpened={isOpened} onClick={() => setIsOpened(false)}>
        {items
          .filter((item) => !item.showAlways)
          .map((item) => (
            <NavItem key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </NavItem>
          ))}
      </NavList>
      <Hamburger
        color={theme.color.lightBlue}
        toggled={isOpened}
        onToggle={() => setIsOpened(!isOpened)}
      />
    </>
  )
}

const NavWrapper = styled.div`
  display: flex;
  margin: 0 16px 0 auto;
`

const NavItem = styled.li``

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
)

const NavLink = styled(Link)`
  display: block;
  color: black;
  padding: 0.6em 1.6em;
`
