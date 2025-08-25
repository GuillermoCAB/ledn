import React from "react";
import { Alert } from "@mantine/core";

interface ErrorStateProps {
  title: string;
  message: string;
  color?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  message,
  color = "red",
}) => (
  <Alert color={color} title={title}>
    {message}
  </Alert>
);
