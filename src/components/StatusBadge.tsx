import React from "react";
import { Badge } from "@mantine/core";
import { Transaction } from "../types";
import { getStatusColor, getStatusGradient, getStatusIcon } from "../utils";

interface StatusBadgeProps {
  status: Transaction["status"];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "md",
}) => (
  <Badge
    color={getStatusColor(status)}
    size={size}
    variant="gradient"
    gradient={getStatusGradient(status)}
  >
    {getStatusIcon(status)} {status}
  </Badge>
);
