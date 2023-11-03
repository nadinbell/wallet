import { useState } from "react";
import omit from "lodash.omit";
import { getCardById  } from "../utils/common";
import { Card } from "../types/interfaces";

export const useCards = (cardData: Card[]) => {

	const [cardId, setCardId] = useState(cardData[0].id);
	
	const selectedCard = getCardById(cardData, cardId);
	const cardTransactions = selectedCard?.transactions;
	const cards = cardData.map(card => omit(card, "transactions"));
	const currentBalance = selectedCard?.currentBalance;
	const selectCard = (id: string) => setCardId(id); 

	console.log({cardId})

	return {
		currentBalance: currentBalance,
		cards: cards,
		transactions: cardTransactions,
		selectedCardId: cardId,
		selectCard: selectCard,
	}
}