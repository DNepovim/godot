import styled from "@emotion/styled"
import grassWhiteImage from "../../images/grass-white.svg"
import grassImage from "../../images/grass.svg"

export const Grass = styled.div`
  position: absolute;
  z-index: 15;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 100%;
  height: 20px;
  background-image: url(${({ isSnowfall }: { isSnowfall?: boolean }) =>
    isSnowfall ? grassWhiteImage : grassImage});
  background-repeat: repeat-x;
  background-size: contain; ;
`
