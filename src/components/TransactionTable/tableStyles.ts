import styled from "styled-components";
import { theme } from "../../constants";

export const tableStyles = {
  table: {
    width: "100%",
    background: theme.colors?.background?.[7],
    border: `1px solid ${theme.colors?.coruscant?.[9]}`,
    borderRadius: "12px",
    borderCollapse: "collapse",
  },
  headerRow: {
    backgroundColor: theme.colors?.coruscant?.[9] + "30",
  },
  headerCell: {
    color: theme.colors?.coruscant?.[5],
    fontWeight: 700,
    textAlign: "left",
    padding: "8px 16px",
  },
  row: {
    borderBottom: `1px solid ${theme.colors?.coruscant?.[9] + "30"}`,
    transition: "all 0.2s ease",
  },
  group: {
    display: "flex",
    gap: "4px",
  },
  dateCell: {
    color: "white",
    whiteSpace: "nowrap",
    textAlign: "left",
    padding: "8px 16px",
  },
  userCell: {
    color: "white",
    fontWeight: 600,
    textAlign: "left",
    padding: "8px 16px",
  },
  currencyCell: {
    color: theme.colors?.coruscant?.[5],
    fontWeight: 700,
    whiteSpace: "nowrap",
    textAlign: "left",
    padding: "8px 16px",
  },
} as const;

export const Row = styled.tr`
  transition: all 0.2s ease;

  &:nth-of-type(even) {
    background-color: ${theme.colors?.background?.[8] + "70"};
  }

  &:nth-of-type(odd) {
    background-color: ${theme.colors?.background?.[7]};
  }

  &:hover {
    background-color: ${theme.colors?.coruscant?.[9] + "30"};
    cursor: pointer;
    transform: scale(1.005);
  }
`;
