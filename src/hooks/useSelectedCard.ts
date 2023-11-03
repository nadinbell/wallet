import { useState } from "react";
import { getCardById  } from "../utils/common";
import { ICard } from "../types/interfaces";

export const useSelectedCard = (cardData: ICard[]) => {
	const [cardId, setCardId] = useState(cardData[0].id);
	
	const selectedCard = getCardById(cardData, cardId);
	const cardTransactions = selectedCard?.transactions ?? [];
	const currentBalance = selectedCard?.currentBalance;
	const selectCard = (id: string) => setCardId(id); 

	return {
		currentBalance: currentBalance,
		transactions: cardTransactions,
		selectedCardId: cardId,
		selectCard: selectCard,
	}
}