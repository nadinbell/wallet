import { ICard } from "../../types/interfaces";
import { Card } from "../Card/Card";
import "./CardsContainer.css";

interface CardsContainerProps {
	selectedCardId: string,
	cards: Omit<ICard, "transactions">[],
	onSelectCard: () => void,
}
export const CardsContainer = ({selectedCardId, cards, onSelectCard}: CardsContainerProps ) => {
	return (
		<div className="cardsContainer">
			{cards.map(card => (
				<Card 
					key={card.id}
					id={card.id} 
					issuer={card.issuer} 
					number={card.number} 
					expirationDate={card.expirationDate} 
					isSelected={selectedCardId === card.id}
					onSelectCard={onSelectCard} 
				/>
			))}
		</div>
	)

}