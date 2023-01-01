import {
  CardBody,
  CardImage,
  CardLink,
  CardText,
  CardTitle,
  StyledCard,
} from "./styles";

interface ICardProps {
  title: string;
  text: string;
  url: string;
  imageUrl: string;
}
export const Card: React.FC<ICardProps> = ({ title, text, url, imageUrl }) => {
  return (
    <StyledCard>
      <CardImage src={imageUrl} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardLink href={url}>See More</CardLink>
      </CardBody>
    </StyledCard>
  );
};
