import React from "react";
import { TextInput } from "@mantine/core";
import { inputStyles } from "./commonStyles";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({ value, onChange, placeholder = "🔍 Search..." }) => {
    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        mb="xl"
        size="lg"
        styles={inputStyles}
      />
    );
  }
);
