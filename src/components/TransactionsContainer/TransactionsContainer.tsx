import { ITransaction } from "../../types/interfaces";
import { Transaction } from "./Transaction";
import "./Transactions.css";

interface TransactionContainerProps {
  transactions: ITransaction[];
}

export const TransactionsContainer = ({ transactions }: TransactionContainerProps) => {
  return (
    <div className="transactionsContainer">
      {transactions.map((transaction, index) => (
        <Transaction key={index} {...transaction} />
      ))}
    </div>
  );
};
