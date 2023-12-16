import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { colorPalettes } from "../../styles/theme";

export interface BlockFields {
  id?: string;
  palette?: string;
  children: ReactNode;
}

export const Block: React.FC<BlockFields> = ({ id, palette, children }) => (
  <StyledSection palette={palette ?? "sky"} id={id}>
    {children}
  </StyledSection>
);

const StyledSection = styled.section`
  ${({ palette }: { palette: string }) => `
    position: relative;
    background-color: ${colorPalettes[palette].background};
    color: ${colorPalettes[palette].text};

    ::selection {
      background-color: ${colorPalettes[palette].selection};
    }
    a {
      color: ${colorPalettes[palette].underline};
    }
    h1,
    h2,
    h3,
    h4 {
      color: ${colorPalettes[palette].title};

      &:after {
        background-color: ${colorPalettes[palette].underline};
      }
    }
  `}
`;
