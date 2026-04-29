"use client";

import { Search } from "lucide-react";
import { SearchWrapper, SearchInput } from "./styles";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <SearchWrapper>
      <Search size={18} color="#9ca3af" />
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchWrapper>
  );
}
