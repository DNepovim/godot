import styled from "@emotion/styled"

export interface LeaveParams {
  top: number
  left: number
  rotate: number
  position: number
  duration: number
}

interface LeaveProps extends LeaveParams {
  scrollPosition: number
  index: number
}

export const Leave = styled.img`
  position: absolute;
  top: ${({ top }: LeaveProps) => top}%;
  left: ${({ left }: LeaveProps) => left}%;
  transform-origin: bottom left;
  width: 15px;
  opacity: ${({ position, scrollPosition }: LeaveProps) =>
    position < scrollPosition ? 1 : 0};
  transition: opacity 500ms;
  animation-name: appearing-${({ index }: LeaveProps) => index};
  animation-duration: ${({ duration }: LeaveProps) => duration}s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  @keyframes appearing-${({ index }: LeaveProps) => index} {
    from {
      transform: rotate(${({ index }: LeaveProps) => index - 5}deg);
    }
    to {
      transform: rotate(${({ index }: LeaveProps) => index + 5}deg);
    }
  }
`
