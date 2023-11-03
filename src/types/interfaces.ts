export enum CardIssuer {
	Visa = "VISA",
	Mastercard = "MASTERCARD",
	Amex = "AMEX",
	Maestro = "MAESTRO"
}

export interface Transaction {
	id: string;
	name: string;
	details: string;
	date: string;
	amount: number;
}

export interface ICard {
	id: string;
	issuer: CardIssuer;
	number: string;
	expirationDate: string;
	currentBalance: number;
	currency: "EUR" | "USD";
	transactions: Transaction[];
}
