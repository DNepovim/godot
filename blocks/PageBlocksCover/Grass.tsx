"use client";
import styled from "@emotion/styled";

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
    isSnowfall ? "../../images/grass-white.svg" : "../../images/grass.svg"});
  background-repeat: repeat-x;
  background-size: contain;
`;
