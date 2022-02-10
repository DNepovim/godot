/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { theme } from "../../styles/theme"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"
import { useWindowWidth } from "@react-hook/window-size"
import useScrollPosition from "@react-hook/window-scroll"
import AnchorLink, { AnchorLinkProps } from "react-anchor-link-smooth-scroll"
import useOnClickOutside from "use-onclickoutside"
import { Container } from "../Container/Container"
import { Button } from "../Button/Button"
import { NavigationItem, NavigationItemType } from "../../data"
import { isLinkExternal } from "../../admin/utils/isLinkExternal"
import { underline } from "../../styles/utils"

const BREAKPOINT = 740

export const Navigation: React.FC<{
  title?: string
  items: NavigationItem[]
}> = ({ title, items }) => {
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

  const onScrollHandler = useCallback(() => {
    const intItems = items.filter((item) => !isLinkExternal(item.link))
    if (
      document.body.scrollHeight - (scrollPosition + window.innerHeight) <
      100
    ) {
      setActiveItem(intItems[intItems.length - 1].link)
      return
    }
    setActiveItem(
      intItems.reduce<string | undefined>((acc, item) => {
        const block = document.querySelector(item.link)
        if (!block) {
          return
        }
        const { top } = block.getBoundingClientRect()
        return top < 100 ? item.link : acc
      }, undefined)
    )
  }, [items, scrollPosition])

  useEffect(() => {
    onScrollHandler()
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
          {title && activeItem !== items[0].link && (
            <Title href={items[0].link} onClick={() => setIsOpened(false)}>
              {title}
            </Title>
          )}
          {!isMobile && (
            <NavList>
              {items
                .filter((item) =>
                  activeItem === items[0].link ? !item.showAfterScroll : true
                )
                .map((item) => (
                  <NavItem key={item.link} onClick={() => setIsOpened(false)}>
                    {item?.type === NavigationItemType.Button ? (
                      <Button
                        link={item.link}
                        isSmall
                        targetBlank={isLinkExternal(item.link)}
                      >
                        {item.title}
                      </Button>
                    ) : (
                      <NavLink
                        isActive={item.link === activeItem}
                        href={item.link}
                      >
                        {item.title}
                      </NavLink>
                    )}
                  </NavItem>
                ))}
            </NavList>
          )}
          {isMobile && (
            <>
              {items
                .filter((item) => item.showAlways)
                .filter((item) =>
                  activeItem === items[0].link ? !item.showAfterScroll : true
                ) && (
                <div
                  css={css`
                    display: flex;
                    margin: 0 16px 0 auto;
                  `}
                >
                  {items
                    .filter((item) => item.showAlways)
                    .filter((item) =>
                      activeItem === items[0].link
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
                </div>
              )}
              <NavListMobile
                isOpened={isOpened}
                onClick={() => setIsOpened(false)}
              >
                {items
                  .filter((item) => !item.showAlways)
                  .map((item) => (
                    <NavItem key={item.link}>
                      <NavLinkMobile href={item.link}>
                        {item.title}
                      </NavLinkMobile>
                    </NavItem>
                  ))}
              </NavListMobile>
            </>
          )}
          {isMobile && (
            <Hamburger
              color={theme.color.lightBlue}
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
  border-bottom: 2px solid ${theme.color.brown};
`

const Nav = styled("nav")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3.2em;
`

const Title = styled(AnchorLink)`
  display: flex;
  margin: 0 auto 0 0;
  font-size: 1em;
  font-family: ${theme.fonts.headings};
  color: ${theme.color.darkBlue};
  ${underline(theme.color.yellow, 4)}

  @media (min-width: 400px) {
    font-size: 1.4em;
  }
`

const NavList = styled("ul")`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled("li")`
  display: flex;
  margin-left: 4px;
`

const activeNavLink = css`
  text-decoration: none;
  color: ${theme.color.brown};

  &:after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`

const NavLink = styled(
  ({ isActive, ...props }: { isActive: boolean } & any) => (
    <AnchorLink {...props} />
  )
)`
  position: relative;
  display: block;
  padding: 0.4rem;
  transition: color 300ms;
  color: black;
  cursor: pointer;
  font-weight: bold;

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0.4rem;
    bottom: 0;
    left: 0.4rem;
    height: 4px;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background-color: ${theme.color.brown};
  }

  ${({ isActive }) => (isActive ? activeNavLink : "")}

  &:hover {
    ${activeNavLink}
  }
`

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
