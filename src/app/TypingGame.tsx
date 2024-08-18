"use client";
import Data from "../../data.json";
import { useState, useEffect } from "react";

export default function TypingGame() {
  const numb = Math.floor(Math.random() * Data.length);
  const [data, setData] = useState(Data[numb]);
  const handleEnterkey = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const rand = Math.floor(Math.random() * Data.length);
      console.log(rand);
      setData(Data[rand]);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEnterkey);
    return () => {
      document.removeEventListener("keydown", handleEnterkey);
    };
  }, [data.word]);
  const [inputWord, setInputWord] = useState("");

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setInputWord((prev) => prev + event.key);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="w-4/5 h-[600px] mx-auto justify-center items-center text-center bg-green-500">
      <h1 className="text-5xl">test word</h1>
      <p className="text-3xl">number:{data.id}</p>
      <p className="text-3xl">word:{data.word}</p>
      <p>{inputWord}</p>
    </div>
  );
}
