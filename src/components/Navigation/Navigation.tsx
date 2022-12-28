import React, { useCallback, useEffect, useState } from "react"
import styled from "@emotion/styled"
import useScrollPosition from "@react-hook/window-scroll"
import { theme } from "../../styles/theme"
import { underline } from "../../styles/utils"
import { ShowOnDesktop, ShowOnMobile } from "../ShowOnMobile/ShowOnMobile"
import { DesktopNavigation } from "./DesktopNavigation"
import { MobileNavigation } from "./MobileNavigation"
import { Link } from "gatsby"
import { NavigationItem } from "../../data"
import { Container } from "../Container/Container"
import { css, Global } from "@emotion/react"

export const Navigation: React.FC<{
  title?: string
  items: NavigationItem[]
}> = ({ title, items }) => {
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const scrollPosition = useScrollPosition()
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (
        document.body.scrollHeight - (scrollPosition + window.innerHeight) <
        100
      ) {
        setActiveItem(items[items.length - 2].link)
        return
      }
      setActiveItem(
        items.slice(0, -1).reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link.substring(1))
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
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      <NavContainer>
        <Nav>
          {title && activeItem && activeItem !== items[0].link && (
            <Title to={items[0].link}>{title}</Title>
          )}
          <NavList>
            <ShowOnDesktop>
              <DesktopNavigation items={items} activeItem={activeItem} />
            </ShowOnDesktop>
            <ShowOnMobile>
              <MobileNavigation
                items={items.slice(1)}
                activeItem={activeItem}
              />
            </ShowOnMobile>
          </NavList>
        </Nav>
      </NavContainer>
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

const NavContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
`

const Nav = styled("nav")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3.2em;
`

const Title = styled(Link)`
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
