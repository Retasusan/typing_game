"use client";
import Data from "../../data.json";
import { useState, useEffect } from "react";
import { typingFont } from "../../font/typingFont";

export default function TypingGame() {
  const [numb, setNumb] = useState(0);
  const [data, setData] = useState(Data[numb]);
  const [inputWord, setInputWord] = useState("");
  const [previousNumber, setPreviousNumber] = useState(0);
  const [rand, setRand] = useState(
    Math.floor(Math.random() * (Data.length - 2) + 1)
  );
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [finish_word, setFinishWord] = useState(-1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  let timer = () => {
    setSeconds((prev) => prev + 1);
  };
  useEffect(() => {
    if (isActive) {
      setInterval(timer, 1000);
    }
  }, [isActive]);

  useEffect(() => {
    let count = 0;
    const handleKeyPress = (event: KeyboardEvent) => {
      if (finish_word === -1 && correct + incorrect === 0) {
        event.preventDefault();
        setData(Data[rand]);
        setPreviousNumber(rand);
        setFinishWord((prev) => prev + 1);
        setActive(true);
      } else if (event.key === data.word[count]) {
        count++;
        setCorrect((prev) => prev + 1);
        setInputWord((prev) => prev + event.key);
        if (count === data.word.length) {
          setInputWord("");
          count = 0;
          setRand(Math.floor(Math.random() * (Data.length - 2) + 1));
          if (rand !== previousNumber) {
            setData(Data[rand]);
            setPreviousNumber(rand);
            setFinishWord((prev) => prev + 1);
          } else {
            let temp = Math.floor(Math.random() * (Data.length - 2) + 1);
            while (temp === previousNumber) {
              temp = Math.floor(Math.random() * (Data.length - 2) + 1);
            }
            setData(Data[temp]);
            setPreviousNumber(temp);
            setFinishWord((prev) => prev + 1);
          }
        }
      } else {
        setIncorrect((prev) => prev + 1);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [data.word]);

  return (
    <div>
      <div
        className={`${typingFont.className} w-4/5 h-[600px] pt-[50px] mx-auto justify-center items-center text-centerborder-none max-w-[1000px] min-w-[600px] shadow-xl bg-white rounded-2xl`}
      >
        <div className="w-4/5 h-[230px] mx-auto pt-[80px]">
          {/* <p className="text-3xl">number:{data.id}</p> */}
          <p className="text-6xl text-center">{data.word}</p>
        </div>
        <div className="w-4/5 h-[250px] mx-auto border-solid border-2 border-[#b9e4ed] rounded-3xl shadow-xl">
          <p className=" pt-[65px] text-6xl text-center">{inputWord}</p>
        </div>
      </div>
      <div className="ml-[10%]">
        <p>correct:{correct}</p>
        <p>wrong:{incorrect}</p>
        <p>finished words:{finish_word}</p>
        <p>time:{seconds}</p>
      </div>
    </div>
  );
}
