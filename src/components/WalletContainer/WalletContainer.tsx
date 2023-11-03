import { useCards } from "../../hooks/useCards";
import { useSelectedCard } from "../../hooks/useSelectedCard";
import { AddCard } from "../AddCard/AddCard";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { TransactionsContainer } from "../TransactionsContainer/TransactionsContainer";
import './WalletContainer.css';

export const WalletContainer = () => {
	const { cards, cardsInfo, addCard } = useCards();

	console.log({cardsInfo})
	const { currentBalance, transactions, selectedCardId, selectCard } = useSelectedCard(cards);

	console.log({selectedCardId});

	return (
		<div className="walletContainer">
			<div className="leftPanel">
				<h2>My Wallets</h2>
				<AddCard onAddCard={addCard} /> 
				<CardsContainer cards={cardsInfo} selectedCardId={selectedCardId} onSelectCard={selectCard} />
			</div>
			<div className="rightPanel">
				{/* <CurrentBalance currentBalance={currentBalance} /> */}
				<TransactionsContainer transactions={transactions} />
			</div>
		</div>
	)
}