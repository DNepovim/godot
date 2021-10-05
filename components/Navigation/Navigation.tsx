/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react"
import Image, { ImageProps } from "next/image"
import { theme } from "../../theme"
import { css } from "@emotion/react"
import { Container } from "../Container/Container"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"
import { useWindowWidth } from "@react-hook/window-size"
import useScrollPosition from "@react-hook/window-scroll";
import { data } from "../../data"
import AnchorLink from 'react-anchor-link-smooth-scroll'


interface NavigationItem {
  title: string
  link: string
}

const BREAKPOINT = 600

export const Navigation: React.FC<{logo: ImageProps["src"], items: NavigationItem[]}> = ({logo, items}) => {
  const [isOpened, setIsOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const width = useWindowWidth()
  const scrolled = useScrollPosition()

  useEffect(() => {
    setIsMobile(width < BREAKPOINT)
  }, [width])

  useEffect(() => {
    setIsScrolled(scrolled > 50)
  }, [scrolled])

  return (
    <NavBar>
      <Container css={css`
        padding-top: 0;
        padding-bottom: 0;
      `}>
        <Nav>
          <AnchorLink href={`#${data.config.navigation[0].link}`}>
            <Image
              css={css`padding: 8px; width: auto; height: 100%`}
              src={logo}
              alt="Insomnia – logo"
              width={isScrolled ? 50 : 90}
              height={isScrolled ? 50 : 90}
            />
          </AnchorLink>
          {!isMobile && (
            <NavList>
              {items.map(item => (
                <NavItem key={item.link}>
                  <NavLink href={`#${item.link}`}>{item.title}</NavLink>
                </NavItem>
              ))}
            </NavList>
            )
          }
          {isMobile && (
            <NavListMobile isOpened={isOpened}>
              {items.map(item => (
                <NavItem key={item.link}>
                  <NavLinkMobile href={`#${item.link}`}>{item.title}</NavLinkMobile>
                </NavItem>
              ))}
            </NavListMobile>
            )
          }
          {isMobile && <Hamburger color={theme.color.brand} onToggle={() => setIsOpened(!isOpened)} />}
        </Nav>
      </Container>
    </NavBar>
  )
}

const NavBar = styled("div")`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.color.background};
  width: 100vw;
`

const Nav = styled("nav")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled("ul")`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled("li")`
  margin-left: 4px;
`

const NavLink = styled(AnchorLink)`
  position: relative;
  display: block;
  padding: 0.4rem;
  transition: color 300ms;
  color: black;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 300ms;
    background-color: ${theme.color.brand};
  }

  &:hover {
    text-decoration: none;
    color: ${theme.color.brand};

    &:after {
      width: 100%;
    }
  }
`

const NavListMobile = styled.ul((props: { isOpened: boolean }) => `
  background-color: white;
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0 0 4px;
  transform: translateX(${props.isOpened ? 0 : 100}%);
  transition: transform 200ms;
`)

const NavLinkMobile = styled(AnchorLink)`
  display: block;
  color: black;
  padding: 0.6em 1.6em;
`
