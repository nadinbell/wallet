import { ICard, CardIssuer } from "../types/interfaces"
export const cardData: ICard[] = [
	{
		id: "1",
		issuer: CardIssuer.Amex,
		cardNumber: "12378678910",
		expirationDate: "10/02/2025",
		currentBalance: 245,
		currency: "EUR",
		transactions: [
			{
				id: "1",
				name: "Starbacks",
				details: "Vienna",
				date: "10/02/2022",
				amount: -5.4,
			},
			{
				id: "2",
				name: "Neapolitano",
				details: "Vienna",
				date: "13/02/2022",
				amount: -25,
			},
			{
				id: "3",
				name: "Vici",
				details: "Vienna",
				date: "14/02/2022",
				amount: -35,
			},
			{
				id: "4",
				name: "Private Transfer",
				details: "Vienna",
				date: "15/02/2022",
				amount: 250,
			}
		]
	},
	{
		id: "2",
		issuer: CardIssuer.Mastercard,
		cardNumber: "123786454446",
		expirationDate: "11/02/2026",
		currentBalance: 565,
		currency: "EUR",
		transactions: [
			{
				id: "1",
				name: "Neapolitano",
				details: "Vienna",
				date: "13/02/2022",
				amount: -25,
			},
			{
				id: "2",
				name: "Starbacks",
				details: "Vienna",
				date: "10/02/2022",
				amount: -5.4,
			},
			
			{
				id: "3",
				name: "Vici",
				details: "Vienna",
				date: "14/02/2022",
				amount: -35,
			},
			{
				id: "4",
				name: "Private Transfer",
				details: "Vienna",
				date: "15/02/2022",
				amount: 250,
			}
		]
	},
	{
		id: "3",
		issuer: CardIssuer.Visa,
		cardNumber: "145786454445",
		expirationDate: "02/11/2027",
		currentBalance: 1005.34,
		currency: "EUR",
		transactions: [
			{
				id: "1",
				name: "Vici",
				details: "Vienna",
				date: "14/02/2022",
				amount: -35,
			},
			{
				id: "2",
				name: "Starbacks",
				details: "Vienna",
				date: "10/02/2022",
				amount: -5.4,
			},
			{
				id: "3",
				name: "Neapolitano",
				details: "Vienna",
				date: "13/02/2022",
				amount: -25,
			},
			{
				id: "4",
				name: "Private Transfer",
				details: "Vienna",
				date: "15/02/2022",
				amount: 250,
			}
		]
	}
]