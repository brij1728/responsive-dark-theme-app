import styled, { css } from "styled-components";

import { lighten } from "polished";

export const ButtonContainer = styled.div<{ secondary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  max-width: 200px;
  padding: 1rem;
  color: white;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease;
  :hover {
    background: ${({ theme }) => lighten(0.1, `${theme.colors.background}`)};
    font-size: 1.2rem;
  }
  ${({ theme, secondary }) =>
    secondary &&
    css`
      color: ${theme.colors.primary};
      background: ${theme.colors.background};
      border: 2px solid ${theme.colors.primary};
      :hover {
        background: ${theme.colors.primary};
        color: blue;
      }
    `}
`;
