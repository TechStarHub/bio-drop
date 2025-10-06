"use client";
import { useState, useMemo } from "react";

interface UseSearchOptions {
  itemsPerPage?: number;
}

export default function useSearch<T>(
  items: T[],
  options: UseSearchOptions = {}
) {
  const { itemsPerPage = 6 } = options;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (searchQuery.trim() === "") {
      return items;
    }

    return items.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      return itemString.includes(searchQuery.toLowerCase());
    });
  }, [items, searchQuery]);

  // Calculate pagination
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get items for current page
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage, itemsPerPage]);

  // Reset to first page when search query changes
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    filteredItems: paginatedItems,
    allFilteredItems: filteredItems,
    searchQuery,
    setSearchQuery: handleSearchQueryChange,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange: handlePageChange,
  };
}
