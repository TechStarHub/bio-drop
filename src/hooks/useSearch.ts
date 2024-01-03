"use client";
import { useState, useMemo } from "react";

export default function useSearch<T>(items: T[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (searchQuery.trim() === "") {
      return items;
    }

    return items.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      return itemString.includes(searchQuery.toLowerCase());
    });
  }, [items, searchQuery]);

  return { filteredItems, searchQuery, setSearchQuery };
}
