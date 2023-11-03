import { useState, useRef } from "react";
import classNames from "classnames";
import "./AddCard.css";

interface AddCardProps {
	onAddCard: (cardNumber: string, expirationDate: string) => void;
}
export const AddCard = ({ onAddCard }: AddCardProps) => {
	const [ isModalOpen, setModalOpen ] = useState(false);
	const cardNumberRef = useRef<HTMLInputElement>(null);
	const expirationDateRef = useRef<HTMLInputElement>(null);

	const onAddButtonClick = () => {
		// TODO: add validation
		const cardNumber = cardNumberRef.current?.value;
		const expirationDate = expirationDateRef.current?.value;
		console.log({cardNumber, expirationDate})
		onAddCard(cardNumber, expirationDate);
		setModalOpen(value => !value);
	}

	return (
		<div className="addCardContainer">
			<span 
				className="addCardButton" 
				onClick={() => setModalOpen(value => !value)}
			>+</span>
			<div className={classNames("addCardModal", {"visible": isModalOpen})}>
				<label >
					<input type="text" ref={cardNumberRef} />
				</label>
				
				<input type="text" ref={expirationDateRef} />
				<button className="saveButton" onClick={onAddButtonClick}>Save</button>
			</div>
		</div>
		
	)
};
