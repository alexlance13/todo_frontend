import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  span {
    padding-right: 15px;
  }
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s linear;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
  }
  ${(props: StyledCardProps) =>
    props.isOpened
      ? 'position: fixed; top: 0; bottom: 0; right: 0; left: 0; z-index: 999;'
      : 'height: 400px; margin: 20px !important;'}
  @media (max-width: 1130px) {
    margin: 12px !important;
  }
`;

export const StyledCardBody = styled(Card.Body)`
  display: grid;
  grid-template: min-content min-content 1fr / 1fr;
  overflow: hidden;
  .card-title,
  p {
    overflow: hidden;
  }
  img {
    justify-self: center;
    ${(props: PropsType) =>
      props.imgHeight / props.imgWidth > 0.9 ? 'height: 100%; width: auto; max-width: 100%' : 'height: auto; width: 100%;'}
    @media (min-width: 1500px), (min-width: 720px) and (max-width: 1130px) {
      ${(props: PropsType) =>
        props.imgWidth / props.imgHeight > 1.5 || props.isOpened
          ? 'height: auto; width: 100%;'
          : 'height: 100%; width: auto; max-width: 100%'}
    }
  }
`;

export const StyledButton = styled(Button)`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0.25rem 0 0.25rem 0.25rem;
`;

interface PropsType {
  imgWidth: number;
  imgHeight: number;
  isOpened: boolean;
}

type StyledCardProps = {
  isOpened: boolean;
};
