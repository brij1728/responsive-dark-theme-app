import { Card } from "../Card";
import styled from "styled-components";

export const StyledCardList = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(3, 18rem);
`;

export const RedCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.background};
`;
