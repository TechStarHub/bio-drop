"use client";
import { useState } from "react";

export default function SearchPeople() {
  const [search, setSearch] = useState([]);

  return (
    <div className="mt-4">
      <h1 className="text-xl md:text-3xl font-bold">People</h1>
      <form action="" className="mt-4">
        <input
          value={search}
          onInput={(e: any) => {
            setSearch(e.target.value);
          }}
          type="search"
          className="w-full bg-slate-100 px-4 py-2 rounded border-2"
          placeholder="Search for people by name or username"
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
