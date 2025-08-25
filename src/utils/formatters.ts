import { checkIfPropIsUnknown } from "./checks";

/**
 * Formats a numeric string value for display.
 * Handles "unknown" values and attempts to format valid numbers.
 *
 * @param value - The value to format
 * @returns Formatted string
 */
export const formatNumericValue = (value: string): string => {
  if (checkIfPropIsUnknown(value)) {
    return value;
  }

  const numericValue = parseFloat(value);

  if (isNaN(numericValue)) {
    return value;
  }

  return numericValue.toLocaleString();
};
