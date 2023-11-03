import { useState } from "react";
import omit from "lodash.omit";
import { ICard } from "../types/interfaces";
import { cardData } from "../data/data";

export const useCards = () => {
	const [ cards, setCards ] = useState<ICard[]>(cardData);

	const addCard = (cardNumber: string, expirationDate: string) => {
		const newCard = {
			id: Math.random().toString(),
			cardNumber,
			expirationDate
		};
		setCards(existedCards => [newCard, ...existedCards]);
	};
	
	const cardsInfo = cards.map(card => omit(card, "transactions"));

	return {
		cards: cards, 
		cardsInfo: cardsInfo,
		addCard: addCard,
	}
}