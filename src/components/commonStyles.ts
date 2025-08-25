import { Alert, Card, MantineTheme, CardProps } from "@mantine/core";
import styled from "styled-components";
import { theme } from "../constants";

export const inputStyles = (theme: MantineTheme) => ({
  input: {
    background: theme.colors?.background?.[7],
    border: `1px solid ${theme.colors?.coruscant?.[9]}`,
    color: "white",
  },
});

export const cardStyles = (theme: MantineTheme) => ({
  background: theme.colors?.background?.[5] + 30,
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.colors?.coruscant?.[9]}`,
});

export const climateBadgeStyles = (theme: MantineTheme) => ({
  borderColor: theme.colors?.coruscant?.[9],
  color: theme.colors?.coruscant?.[3],
  background: theme.colors?.coruscant?.[7] + 30,
});

export const populationInfoStyles = (theme: MantineTheme) => ({
  background: theme.colors?.background?.[5] + 30,
  padding: "8px 12px",
  borderRadius: "6px",
  border: `1px solid ${theme.colors?.coruscant?.[9]}`,
});

export const planetFieldDisplayStyles = (theme: MantineTheme) => ({
  background: theme.colors?.coruscant?.[7] + 30,
  borderRadius: "8px",
  border: `1px solid ${theme.colors?.coruscant?.[9]}`,
});

export const currencyCardStyles = (theme: MantineTheme) => ({
  background: `linear-gradient(135deg, ${
    theme.colors?.coruscant?.[7] + 40
  } 0%, ${theme.colors?.coruscant?.[7] + 10} 100%)`,
  backdropFilter: "blur(10px)",
  border: `2px solid ${theme.colors?.coruscant?.[9]}`,
});

export const exchangeRateAlertStyles = (theme: MantineTheme) => ({
  border: `1px solid ${theme.colors?.blue?.[9]}`,
});

export const PulsingAlert = styled(Alert)`
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 152, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 152, 0, 0);
    }
  }
`;

export const HoverableCard = styled(Card)<CardProps>`
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(218, 165, 32, 0.3);
    border-color: ${theme.colors?.coruscant?.[9] + "30"};
  }
`;

export const StyledScrollArea = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors?.coruscant?.[7]} ${theme.colors?.coruscant?.[6]};

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors?.background?.[6]};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors?.coruscant?.[7]};
    border-radius: 6px;
    border: 2px solid ${theme.colors?.background?.[6]};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors?.coruscant?.[6]};
  }
`;

export const gradients = {
  coruscant: { from: "coruscant.5", to: "coruscant.7" },
};

export const textShadows = {
  strong: (theme: MantineTheme) => ({
    textShadow: theme.other.textShadow.strong,
  }),
  medium: (theme: MantineTheme) => ({
    textShadow: theme.other.textShadow.medium,
  }),
  light: (theme: MantineTheme) => ({
    textShadow: theme.other.textShadow.light,
  }),
};
