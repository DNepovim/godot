import styled from "@emotion/styled"
import React, { ElementRef, useRef } from "react"
import { Icons } from "../../blocks/Columns/columnsDef"
import { theme } from "../../theme"
import { useWindowHeight } from "@react-hook/window-size"
import useScrollPosition from "@react-hook/window-scroll"

const defaultStrokeDashOffset = 1800

export const Icon: React.FC<{ icon: Icons }> = ({ icon }) => {
  const iconRef = useRef<ElementRef<"svg">>(null)
  const windowHeight = useWindowHeight()
  const scrollPosition = useScrollPosition()
  const elTop = iconRef?.current?.getBoundingClientRect()?.top ?? undefined
  const start = windowHeight * 0.9
  const end = windowHeight * 0.5

  const percentage = elTop
    ? elTop < end
      ? 1
      : elTop > start
      ? 0
      : (elTop - start) / (start - end)
    : 0
  return (
    <svg
      ref={iconRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 157.34 150"
    >
      <Path
        strokeDashOffset={
          defaultStrokeDashOffset - defaultStrokeDashOffset * percentage
        }
        {...icons[icon]}
      />
    </svg>
  )
}

const Path = styled.path(
  (props: { strokeDashOffset: number }) => `
  stroke-dashoffset: ${props.strokeDashOffset};
  stroke-dasharray: ${defaultStrokeDashOffset};
  fill: none;
  stroke: ${theme.color.yellow};
  stroke-miterlimit: 10;
  stroke-width: 4px;
  opacity: 0.7;
`
)

const icons = {
  scout: {
    d: "M148.21,149.05c-3.53-7.67-6.49-23.86-10-31.28-.81-1.71-3.51-5-5-5.62s-14.39-3.39-14.39-3.39a4.54,4.54,0,0,0-1-1.87c-.87-1.16-5.93-5.09-6.81-6.78a54.9,54.9,0,0,0-4.45-6.77c-.69-.72-1.48-5.71-2.61-7s-4.63-.44-4.63-.44l-.17-3.57c3.49-5.08,4-12.21,4-12.21a5.17,5.17,0,0,0,3.4-.09c1.66-.72,3.58-6.33,3.93-11.77s-4.1-4.64-4.1-4.64a24.46,24.46,0,0,0,.09-4.12c30.36-2,33.27-13.65,26.67-15a173.88,173.88,0,0,0-26.69-3.15c-2.47-7.65-5.58-16.14-6.61-18.47C97.3,6.89,95.5,10,91,7.7,84.53,4.47,85.11,1.77,79,2c-7.21.28-5.21,3.43-13.08,6.82-6.17,2.67-4.76,1.48-7.11,4.69-1.39,1.9-3.91,12.5-5.74,20.83-10.81,1.25-21.81,3-26.27,5C20.73,42.17,23.39,53.44,53,52.93c.12,1.19.23,1.89.23,1.89s-2.71-.62-3.4,2.94,3,11.68,5,13.82,3.92,0,3.92,0a32.81,32.81,0,0,0,4.89,12l.26,2a19.77,19.77,0,0,0-2.44,0,5.08,5.08,0,0,0-2.71,1.6c-.78.72-2.18.63-3.57,1.25s-2,2-2,4.55a38,38,0,0,1-.7,6.24c-.17,1.07-.78,1.87-3.05,2.67s-3.49,4.1-3.49,4.1-13.61,2-14.66,2.59-.87,2.41-.87,2.41c-2.18.62-2.44,1.33-3.67,4.1s-4.44,4.9-8.2,9.72S5.09,142.73,1.77,149.06",
  },
  lile: {
    d: "M68.1,148.45l.7-.6c4-3.46,7.69-8.76,8-14,.14-2.94-.71-6.34-2.47-12.61a52.5,52.5,0,0,1-.82-5.8h1.88a22.26,22.26,0,0,0,1.93,11.16,12.22,12.22,0,0,0,9.58,6.68h0a13.94,13.94,0,0,0,11.86-4.67l0,0,0,0c1.88-2.38,3-4.44,3.29-6.69s-.21-4.55-1.21-7.42l-.87-2.48-1.25,2.3s-1.29,2.39-2.26,3.92c-2.09,3.3-6.54,3.8-9.9,1.71-2.24-1.78-3.1-3-3.45-4.49a6.17,6.17,0,0,0,.65-12.3c.19-.56.38-1.12.55-1.64.32-1,.67-1.88.71-2,2.76-5,5.9-9.15,9.5-11.94a17.58,17.58,0,0,1,12.39-4,5.56,5.56,0,0,1,2.88,2.12,6.14,6.14,0,0,1,1.44,3.86c-.28,2.35-.81,3-1.63,3.39a13.35,13.35,0,0,1-4.29.49l-1.58,0,.52,1.52a11.94,11.94,0,0,0,3.35,4.54,13.29,13.29,0,0,0,13,2.29,19.36,19.36,0,0,0,11.09-9.91l0,0v0c3.33-7.81,3-15.06,0-20.89s-8.52-10.23-15.37-12.66h0a28,28,0,0,0-8.73-1.54,23.47,23.47,0,0,0-11,2.53h0c-5.39,2.8-9.61,9-13.08,18.05A146.93,146.93,0,0,0,76.88,103h-4c.16-2.53.32-5.89.48-7.85.74-9.06,3.49-18.6,9.21-31.72,5-11.5,5.85-20,2.78-29.25v0C81.11,23,75.13,13.65,69,5l-1-1.4L67.11,5l-5.28,8.24c-7.37,11.5-11.39,19.6-12.25,27.78S51.05,57.26,56,68.5h0c5.14,11.21,6.64,22.81,7.5,34.45H59.32c-2.08-8.91-3.48-18.49-6.49-26.61h0c-2.52-6.67-5.61-11.47-9.57-14.62S34.52,57.13,28.87,57H27v.05c-14.34.61-25.24,10.74-25,24a23.33,23.33,0,0,0,9.43,18.55c5.3,3.74,12.11,4.39,17.33-.08a27.43,27.43,0,0,0,4.11-4.84l1.66-2.45-2.85.62a6.75,6.75,0,0,1-4.38-.67,3.67,3.67,0,0,1-2.15-2.85,6.06,6.06,0,0,1,2.63-4.7,8.09,8.09,0,0,1,4.69-1.35A21.85,21.85,0,0,1,39.6,85c4,2.1,9.6,8.84,11.54,14,.27.72.9,2.53,1.46,4.13a6.34,6.34,0,0,0-5.25,6.07,6.41,6.41,0,0,0,6.13,6.18,9.18,9.18,0,0,1-4.12,5.09c-2.2,1.29-5.62.72-8-.91a13.8,13.8,0,0,1-2.61-3c-.79-1.13-1.32-2.09-1.32-2.09L36,111.88l-.67,2.94a22.19,22.19,0,0,0-.72,7.06,11.55,11.55,0,0,0,2.77,6.45h0c2.91,3.4,7.37,5.64,11.92,5.11h.06c4.25-.75,7.33-2.56,9.31-5.21s2.84-6,3-9.83h0a29.44,29.44,0,0,0-.06-3h1.53a63.92,63.92,0,0,1-1.83,9.26c-1.18,3.43-2,6.31-1.67,9.14a21.12,21.12,0,0,0,7.72,14.07l.74.56",
  },
  hand: {
    d: "M77.49,148c18.73,0,21.6-6.13,25.31-9.85,5.84-5.83,8.89-9.8,14.15-15.71a34.59,34.59,0,0,1,6.75-6.34,158,158,0,0,0,15-11c4.09-3.37,8.76-6,13.17-9,2.34-1.58,3.94-3.56,3.34-6.6a7.36,7.36,0,0,0-6-5.66,25.29,25.29,0,0,0-15.87,2.53c-2.27,1.18-4.24,3-6.58,4A41.33,41.33,0,0,0,117,96.3c-9,7.19-20.31-17.42-20.16-23.79a40.35,40.35,0,0,1,.5-6.22c.8-4.43,2.16-8.79,2.6-13.24.66-6.75.79-13.55,1-20.33.19-5.09.2-10.19.28-15.28a16.28,16.28,0,0,0-1.68-8.35,6.74,6.74,0,0,0-6.47-3.75A5.61,5.61,0,0,0,87.6,9.72a23.3,23.3,0,0,0-1.25,6.33c-.07,9.37-2.22,18.37-4.76,27.26a91,91,0,0,0-3.12,16.55C78.37,61,78,62,76.63,62S75.11,60.93,75,59.92c-1-7-2.25-13.89-3-20.87A225.85,225.85,0,0,0,66.21,8.5,12.58,12.58,0,0,0,64.71,5c-1.69-2.7-5.55-3.67-9-2.42a5.77,5.77,0,0,0-3.91,6.83A147.52,147.52,0,0,1,54,31.89c.05,7,.84,13.91,1.32,20.86.26,3.74.59,7.48.81,11.22,0,.52-.46,1.07-.7,1.61-.5-.33-1.2-.54-1.45-1-2.48-4.64-5.06-9.25-7.28-14A118.62,118.62,0,0,1,38.81,29.9a37.07,37.07,0,0,0-3.13-8.17c-1.62-3-4.9-3.87-8.27-2.64A6.39,6.39,0,0,0,23,26.4,27.86,27.86,0,0,0,23.91,30c1.42,4.84,2.91,9.65,4.26,14.49.93,3.33,1.52,6.76,2.55,10,1.93,6.14,4.05,12.22,6.13,18.31.49,1.44,1.2,2.81,1.66,4.25s-.43,2.09-1.49,2.64-1.79.13-2.59-.7c-2.6-2.68-5.2-5.38-8-7.84A34.47,34.47,0,0,1,19,62.62q-2.64-4.57-5.51-9a12.27,12.27,0,0,0-2.61-2.82,5.26,5.26,0,0,0-8.19,2.1,7.68,7.68,0,0,0,0,6.16c1.09,2.71,2.34,5.36,3.62,8,4.24,8.66,10.28,16,16.44,23.35,1.57,1.87,3.41,3.74,4.28,5.94,2.37,6,4.22,12.28,6.4,18.4,1.45,4.07,3.08,8.09,4.74,12.08C42.4,137.17,49.73,148,66.21,148H77.49",
  },
}