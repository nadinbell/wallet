import classNames from "classnames";
import { CardIssuer } from "../../types/interfaces";
import "./Card.css";

interface CardProps {
  id: string;
  issuer?: CardIssuer;
  cardNumber: string;
  expirationDate: string;
  isSelected: boolean;
  onSelectCard: (id: string) => void;
}

export const Card = ({ id, issuer, cardNumber, expirationDate, isSelected, onSelectCard }: CardProps) => {
  return (
    <div className={classNames("cardContainer", { isSelected: isSelected })} onClick={onSelectCard.bind(null, id)}>
      <div className="cardIssuer">{issuer}</div>
      <div className="cardNumber">{cardNumber}</div>
      <div className="expirationDate">{expirationDate}</div>
    </div>
  );
};
