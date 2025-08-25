import React from "react";
import { Center, Loader } from "@mantine/core";

interface LoadingStateProps {
  height?: number | string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  height = 400, 
  size = "lg" 
}) => (
  <Center h={height}>
    <Loader size={size} />
  </Center>
);

export default LoadingState;