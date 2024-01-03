"use client";

import { FormEventHandler } from "react";

type SearchPeopleProps = {
  search: string;
  setSearch: (search: string) => void;
};

export default function SearchPeople({ search, setSearch }: SearchPeopleProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    setSearch(search);
  };
  return (
    <div className="mt-4">
      <h1 className="text-xl md:text-3xl font-bold">People</h1>
      <form onSubmit={handleSubmit} action="" className="mt-4">
        <input
          type="search"
          name="search"
          id="search"
          className="w-full bg-slate-100 px-4 py-2 rounded border-2"
          placeholder="Search for people by name or username"
          minLength={3}
          aria-label="Search for people by name or username"
        />
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Search
        </button>
      </form>
    </div>
  );
}
