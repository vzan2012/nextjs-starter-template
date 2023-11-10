//TODO: Need to work on the Search Component
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚢
      </button>
    </form>
  );
};

export default Search;
