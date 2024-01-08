"use client";
import { RiCornerDownLeftLine } from "react-icons/ri";
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
        <div className="w-full relative group">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full bg-slate-100 px-4 py-2 rounded border-2"
            placeholder="Search for people by name, username, location, or tags "
            minLength={3}
            aria-label="Search for people by name or username"
          />
          <span className="absolute top-[20%] right-2 hidden group-focus-within:block">
            <button type="submit">
              <code className="flex items-center gap-1 border border-gray-300 w-fit rounded px-1 text-sm hover:bg-gray-300 cursor-pointer transition-all duration-300">
                Enter <RiCornerDownLeftLine />
              </code>
            </button>
          </span>
        </div>
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
