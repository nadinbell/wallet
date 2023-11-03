import { useState } from "react";
import { cardData } from "../../data/data";
import { useCards } from "../../hooks/useCards";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import './WalletContainer.css';

export const WalletContainer = () => {

	const { currentBalance, cards, transactions, selectedCardId, selectCard } = useCards(cardData);

	console.log({selectedCardId});

	return (
		<div className="walletContainer">
			<div className="leftPanel">
				{/* <AddCardButton />  */}
				<CardsContainer cards={cards} selectedCardId={selectedCardId} onSelectCard={selectCard} />
			</div>
			<div className="rightPanel">
				{/* <CurrentBalance />
				<TransactionContainer /> */}
			</div>
		</div>
	)
}