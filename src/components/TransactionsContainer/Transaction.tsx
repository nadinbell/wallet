import { ITransaction } from "../../types/interfaces";
import "./Transactions.css";

interface TransactionProps extends ITransaction {}

export const Transaction = ({ id, name, details, date, amount }: TransactionProps) => {
  return (
    <div key={id} className="transaction">
      <div className="transactionDescription">
        <div>{name}</div>
        <div>
          <span>{details}</span>
          <span>-</span>
          <span>{date}</span>
        </div>
      </div>
      <div className="transactionAmount">{amount}</div>
    </div>
  );
};
