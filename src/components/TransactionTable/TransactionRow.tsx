import React from "react";
import { Transaction } from "../../types";
import { tableStyles } from "./tableStyles";
import { CurrencyBadge } from "../CurrencyBadge";
import { StatusBadge } from "../StatusBadge";

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => (
  <tr style={tableStyles.row}>
    <td style={tableStyles.dateCell}>
      {new Date(transaction.date).toLocaleDateString()}
    </td>
    <td style={tableStyles.userCell}>#{transaction.user}</td>
    <td style={tableStyles.amountCell}>
      <div style={tableStyles.group}>
        {transaction.amount.toFixed(2)}
        <CurrencyBadge currency={transaction.currency} />
      </div>
    </td>
    <td style={tableStyles.currencyCell}>GCS</td>
    <td style={tableStyles.currencyCell}>ICS</td>
    <td>
      <StatusBadge status={transaction.status} />
    </td>
  </tr>
);

export default TransactionRow;
