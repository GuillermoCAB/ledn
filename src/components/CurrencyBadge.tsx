import React from "react";
import { Badge } from "@mantine/core";
import { Transaction } from "../types";
import { getCurrencyGradient } from "../utils";

interface CurrencyBadgeProps {
  currency: Transaction["currency"];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const CurrencyBadge: React.FC<CurrencyBadgeProps> = ({
  currency,
  size = "sm",
}) => (
  <Badge
    size={size}
    variant="gradient"
    gradient={getCurrencyGradient(currency)}
  >
    {currency}
  </Badge>
);
