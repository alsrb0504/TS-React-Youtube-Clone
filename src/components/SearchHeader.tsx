import React, { useState, useEffect } from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword ? keyword : "");
  }, [keyword]);

  return (
    <header className="w-full  bg-zinc-700 flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center" onClick={() => navigate("/")}>
        <FaYoutube className="text-4xl text-brand" />
        <p className="font-bold ml-2 text-3xl">Youtube</p>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none text-gray-50 bg-black"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4" type="submit">
          <FaSearch color="white" />
        </button>
      </form>
    </header>
  );
}
