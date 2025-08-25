export const tableStyles = {
  container: {
    overflowX: "auto" as const,
    background: "rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    border: "1px solid blue",
  },
  table: {
    width: "100%",
  },
  headerRow: {
    background: "lightblue",
  },
  headerCell: {
    color: "gray",
    fontWeight: 700,
  },
  row: {
    borderBottom: "1px solid gray",
    transition: "all 0.2s ease",
  },
  group: {
    display: "flex",
    gap: "4px",
  },
  dateCell: {
    whiteSpace: "nowrap" as const,
    color: "#e2e8f0",
  },
  userCell: {
    color: "#e2e8f0",
    fontWeight: 600,
  },
  amountCell: {
    minWidth: "150px",
  },
  currencyCell: {
    whiteSpace: "nowrap" as const,
  },
} as const;
