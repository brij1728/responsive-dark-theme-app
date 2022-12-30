import styled, { css } from "styled-components";

import { lighten } from "polished";

export const Header = styled.div`
  width: 100vw;
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-weight: bold;
  transition: all 200ms ease;
`;

export const Body = styled.div`
  width: 100vw;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  margin-top: ${({ theme }) => theme.headerHeight};
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: all 200ms ease;
`;

export const ToggleContainer = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  background: lightgray;
  border-radius: 20px;
  border: 1px solid grey;
  cursor: pointer;
  transition: all 200ms ease;
  ::after {
    position: absolute;
    transition: all 200ms ease;
    content: "";
    top: 2px;
    left: 2px;
    background: grey;
    width: 15px;
    height: 15px;
    border-radius: 100px;
  }
  ${({ theme, isOn }) =>
    isOn &&
    css`
      background: ${lighten(0.4, "blue")};
      border-color: ${theme.colors.primary};
      ::after {
        left: 22px;
        background: ${theme.colors.primary};
      }
    `}
`;
