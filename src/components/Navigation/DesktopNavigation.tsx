import styled from "@emotion/styled"
import React, { useEffect, useRef, useState } from "react"
import useScrollPosition from "@react-hook/window-scroll"
import { Link } from "gatsby"
import { theme } from "../../styles/theme"
import { NavigationItem, NavigationItemType } from "../../data"
import { isLinkExternal } from "../../utils/isLinkExternal"
import { Button } from "../Button/Button"

interface UnderlineProps {
  left: number
  width: number
}

const getUnderlineCor = (
  container: HTMLElement | null,
  item: Element | null
): UnderlineProps | undefined => {
  const navListRect = container?.getBoundingClientRect()
  const activeItemRect = item?.getBoundingClientRect()

  if (!navListRect || !activeItemRect) {
    return
  }

  return {
    left: activeItemRect.left - navListRect.left,
    width: activeItemRect.width,
  }
}

export const DesktopNavigation: React.FC<{
  items: NavigationItem[]
  activeItem?: string
}> = ({ items, activeItem }) => {
  const [activeItemCor, setActiveItemCor] = useState<
    UnderlineProps | undefined
  >()
  const scrollPosition = useScrollPosition()
  const navListRef = useRef<HTMLUListElement | null>(null)

  const fallbackedActiveItem = activeItem ?? items[0].link

  useEffect(() => {
    const activeNavItem = document.querySelector(
      `a[href$='${fallbackedActiveItem}']`
    )
    setActiveItemCor(getUnderlineCor(navListRef.current, activeNavItem))
  }, [scrollPosition])

  return (
    <NavList ref={navListRef}>
      {items
        .filter((item) =>
          !activeItem || activeItem === items[0].link
            ? !item.showAfterScroll
            : true
        )
        .map((item) => (
          <NavItem key={item.link}>
            {item?.type === NavigationItemType.Button ? (
              <StyledButton>
                <Button
                  link={item.link}
                  isSmall
                  targetBlank={isLinkExternal(item.link)}
                >
                  {item.title}
                </Button>
              </StyledButton>
            ) : (
              <NavLink active={item.link === activeItem ? 1 : 0} to={item.link}>
                {item.title}
              </NavLink>
            )}
          </NavItem>
        ))}
      {activeItemCor && (
        <Underline left={activeItemCor.left} width={activeItemCor.width} />
      )}
    </NavList>
  )
}

const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 -0.4rem;
  padding: 0;
  height: 40px;
`

const NavItem = styled.li``

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.4rem;
`

const Underline = styled.div`
  position: absolute;
  left: ${({ left }: UnderlineProps) => left}px;
  bottom: 0;
  height: 4px;
  width: ${({ width }: UnderlineProps) => width}px;
  transition: left 300ms ${theme.animation.function},
    width 300ms ${theme.animation.function};
  background-color: ${theme.color.brown};
`

const NavLink = styled(Link)`
  position: relative;
  display: block;
  font-weight: bold;
  padding: 0 0.4rem;
  color: ${({ active }: { active: 0 | 1 }) =>
    active ? theme.color.brown : theme.color.black};
  cursor: pointer;
  transition: color 300ms;

  &:hover {
    text-decoration: none;
    color: ${theme.color.brown};
  }
`
