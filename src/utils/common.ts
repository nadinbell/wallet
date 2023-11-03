import { ICard } from "../types/interfaces"

export const getCardById = (cardData: ICard[], cardId: string) => cardData.find(card => card.id === cardId);