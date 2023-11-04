export enum CardIssuer {
  Visa = "VISA",
  Mastercard = "MASTERCARD",
  Amex = "AMEX",
  Maestro = "MAESTRO",
}

export interface ITransaction {
  id: string;
  name: string;
  details: string;
  date: string;
  amount: number;
}

export interface CardInfo {
  id: string;
  cardNumber: string;
  expirationDate: string;
  issuer?: CardIssuer;
  currentBalance?: number;
  currency?: "EUR" | "USD";
}

export interface ICard extends CardInfo {
  transactions?: ITransaction[];
}

export type NewCardInfo = Pick<CardInfo, "cardNumber" | "expirationDate">;
