import React from "react";
import { tableStyles } from "./tableStyles";

interface TableHeaderProps {
  columns: { label: string; key: string }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => (
  <thead>
    <tr style={tableStyles.headerRow}>
      {columns.map((column) => (
        <th key={column.key} style={tableStyles.headerCell}>
          {column.label}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
