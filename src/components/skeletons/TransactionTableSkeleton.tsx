import { Paper, Skeleton, Group } from "@mantine/core";
import { cardStyles } from "../commonStyles";
import { tableStyles } from "../TransactionTable/tableStyles";

const TransactionTableSkeleton: React.FC = () => {
  return (
    <Paper shadow="xl" p="xl" radius="lg" mb="xl" style={cardStyles}>
      <Group justify="space-between" mb="xl">
        <Skeleton height={28} width="200px" />
        <Skeleton height={36} width="120px" radius="md" />
      </Group>

      <table style={tableStyles.table}>
        <thead>
          <tr style={tableStyles.headerRow}>
            <th style={tableStyles.headerCell}>
              <Skeleton height={16} width="60px" />
            </th>
            <th style={tableStyles.headerCell}>
              <Skeleton height={16} width="80px" />
            </th>
            <th style={tableStyles.headerCell}>
              <Skeleton height={16} width="100px" />
            </th>
            <th style={tableStyles.headerCell}>
              <Skeleton height={16} width="100px" />
            </th>
            <th style={tableStyles.headerCell}>
              <Skeleton height={16} width="60px" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <tr key={index} style={tableStyles.row}>
              <td style={tableStyles.dateCell}>
                <Skeleton height={14} width="80px" />
              </td>
              <td style={tableStyles.userCell}>
                <Skeleton height={14} width="120px" />
              </td>
              <td style={tableStyles.currencyCell}>
                <Skeleton height={14} width="90px" />
              </td>
              <td style={tableStyles.currencyCell}>
                <Skeleton height={14} width="90px" />
              </td>
              <td style={tableStyles.dateCell}>
                <Skeleton height={20} width="80px" radius="xl" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
};

export default TransactionTableSkeleton;