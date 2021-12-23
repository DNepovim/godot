/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, useState } from "react"
import Image, { ImageProps } from "next/image"
import { theme } from "../../theme"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"
import { useWindowWidth } from "@react-hook/window-size"
import useScrollPosition from "@react-hook/window-scroll"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useOnClickOutside from "use-onclickoutside"
import { Container } from "../Container/Container"

interface NavigationItem {
  title: string
  link: string
}

const BREAKPOINT = 600

export const Navigation: React.FC<{
  logo: ImageProps["src"]
  items: NavigationItem[]
}> = ({ logo, items }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const width = useWindowWidth()
  const scrollPosition = useScrollPosition()
  const navRef = useRef(null)

  useEffect(() => {
    setIsMobile(width < BREAKPOINT)
  }, [width])

  useOnClickOutside(navRef, () => setIsOpened(false))

  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (
        document.body.scrollHeight - (scrollPosition + window.innerHeight) <
        100
      ) {
        setActiveItem(items[items.length - 1].link)
        return
      }
      setActiveItem(
        items.reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link)
          if (!block) {
            return
          }
          const { top } = block.getBoundingClientRect()
          return top < 100 ? item.link : acc
        }, undefined)
      )
    },
    [items, scrollPosition]
  )

  useEffect(() => {
    onScrollHandler(scrollPosition)
  }, [onScrollHandler, scrollPosition])

  return (
    <NavBar>
      <Container
        css={css`
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        <Nav ref={navRef}>
          <AnchorLink
            href={`#${items[0].link}`}
            onClick={() => setIsOpened(false)}
          >
            <Image
              css={css`
                padding: 8px;
                width: auto;
                height: 100%;
              `}
              src={logo}
              alt="Insomnia – logo"
              width={scrollPosition > 50 ? 50 : 90}
              height={scrollPosition > 50 ? 50 : 90}
            />
          </AnchorLink>
          {!isMobile && (
            <NavList>
              {items.map((item) => (
                <NavItem key={item.link} onClick={() => setIsOpened(false)}>
                  <NavLink
                    active={item.link === activeItem}
                    href={`#${item.link}`}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          )}
          {isMobile && (
            <NavListMobile
              isOpened={isOpened}
              onClick={() => setIsOpened(false)}
            >
              {items.map((item) => (
                <NavItem key={item.link}>
                  <NavLinkMobile href={`#${item.link}`}>
                    {item.title}
                  </NavLinkMobile>
                </NavItem>
              ))}
            </NavListMobile>
          )}
          {isMobile && (
            <Hamburger
              color={theme.color.brand}
              toggled={isOpened}
              onToggle={() => setIsOpened(!isOpened)}
            />
          )}
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

const activeNavLink = css`
  text-decoration: none;
  color: ${theme.color.brand};

  &:after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`

const NavLink = styled(AnchorLink)(
  (props: { active: boolean }) => css`
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
      right: 0.4rem;
      bottom: 0;
      left: 0.4rem;
      height: 2px;
      transform-origin: right top;
      transform: scale(0, 1);
      transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      background-color: ${theme.color.brand};
    }

    ${props.active ? activeNavLink : ""}

    &:hover {
      ${activeNavLink}
    }
  `
)

const NavListMobile = styled.ul(
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

const NavLinkMobile = styled(AnchorLink)`
  display: block;
  color: black;
  padding: 0.6em 1.6em;
`
