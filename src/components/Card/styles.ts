import styled from "styled-components";

export const StyledCard = styled.div`
  width: 18rem;
  border: 1px solid #cbcdcf;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardImage = styled.img`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  width: 100%;
`;
export const CardBody = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

export const CardText = styled.p`
  font-size: 1.125rem;
  margin: 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardLink = styled.a`
  font-size: 1.25rem;
  display: inline-block;
  color: #fff;
  background-color: #0c6dfc;
  border-color: #0c6dfc;
  border-radius: 0.25rem;
  padding: 0.5rem 0.875rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease-in, border-color 0.2s ease-in;

  &:hover,
  &:focus {
    background-color: #0a5dd6;
    border-color: #0957c9;
  }
`;
