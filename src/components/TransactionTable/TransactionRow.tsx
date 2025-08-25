import React from "react";
import { CurrencyOpts, Transaction } from "../../types";
import { Row, tableStyles } from "./tableStyles";
import { StatusBadge } from "../StatusBadge";
import { useConvertCurrency } from "../../hooks/useConvertCurrency";

interface TransactionRowProps {
  transaction: Transaction;
  index: number;
}

const TransactionRow: React.FC<TransactionRowProps> = ({
  transaction,
  index,
}) => {
  const { convert } = useConvertCurrency();
  return (
    <Row>
      <td style={tableStyles.dateCell}>
        {new Date(transaction.date).toLocaleDateString()}
      </td>
      <td style={tableStyles.userCell}>#{transaction.user}</td>
      <td style={tableStyles.currencyCell}>
        {convert(transaction.amount, transaction.currency, CurrencyOpts.GCS)}{" "}
        GCS
      </td>
      <td style={tableStyles.currencyCell}>
        {convert(transaction.amount, transaction.currency, CurrencyOpts.ICS)}{" "}
        ICS
      </td>
      <td>
        <StatusBadge status={transaction.status} />
      </td>
    </Row>
  );
};

export default TransactionRow;
