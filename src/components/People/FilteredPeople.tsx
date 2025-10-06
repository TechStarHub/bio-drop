"use client";
import SearchPeople from "./Search";
import PeopleCard from "./PeopleCard";
import Pagination from "./Pagination/Pagination";
import people from "@/data/people.json";
import { useSearch } from "@/hooks";
import { PeopleCardType } from "@/types";

export default function FilteredPeople() {
  const {
    filteredItems,
    allFilteredItems,
    searchQuery,
    setSearchQuery,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
  } = useSearch<PeopleCardType>(people, { itemsPerPage: 6 });

  return (
    <>
      <SearchPeople search={searchQuery} setSearch={setSearchQuery} />
      <p className="mt-2 text-lg font-medium">People ({totalItems})</p>
      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-rows mt-2 mb-8">
        {filteredItems.map((person: any) => (
          <PeopleCard key={person.id} people={person} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </>
  );
}
