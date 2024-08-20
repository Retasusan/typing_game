"use client";
import Data from "../../data.json";
import { useState, useEffect, useRef } from "react";
import { typingFont } from "../../font/typingFont";
import ScoreModal from "./components/ScoreModal";
import { font } from "../../font/font";
import HelpModal from "./components/HelpModal";
type Props = {
  time: number | undefined;
};

export default function TypingGame({ time }: Props) {
  const [numb, setNumb] = useState(0);
  const [data, setData] = useState(Data[numb]);
  const [inputWord, setInputWord] = useState("");
  const [previousNumber, setPreviousNumber] = useState(0);
  const [rand, setRand] = useState(
    Math.floor(Math.random() * (Data.length - 2) + 1)
  );
  const [correct, setCorrect] = useState(0);
  const [showCorrect, setShowCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [showIncorrect, setShowIncorrect] = useState(0);
  const [finish_word, setFinishWord] = useState(-1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [isCalled, setCalled] = useState(false);

  let timer = () => {
    setSeconds((prev) => prev + 1);
  };

  useEffect(() => {
    if (isActive) {
      let processingTime: number = window.setInterval(timer, 1000);
      if (typeof time === "number") {
        setTimeout(() => {
          clearInterval(processingTime);
          setFinished(true);
        }, time * 1000);
      }
    }
  }, [isActive]);

  useEffect(() => {
    setShowCorrect(correct);
    setShowIncorrect(incorrect);
  }, [isFinished]);

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
        className={`${typingFont.className} relative w-4/5 h-[600px] mx-auto justify-center items-center text-centerborder-none max-w-[1000px] min-w-[600px] shadow-xl bg-white rounded-2xl`}
      >
        <ScoreModal
          isFinished={isFinished}
          correct={showCorrect}
          wrong={showIncorrect}
          wpm={20}
        />
        {/* <HelpModal isCalled={isCalled} isFinished={isFinished} /> */}
        <div className="mt-[125px] w-4/5 h-[230px] mx-auto pt-[110px]">
          {/* <p className="text-3xl">number:{data.id}</p> */}
          <p
            className={`${font.className} ml-[-20px] mt-[-70px] text-4xl text-right`}
          >
            {typeof time === "number" ? time - seconds + "sec" : "no limit"}
          </p>
          <p className="text-6xl text-center mt-[20px]">
            {isFinished ? "" : data.word}
          </p>
        </div>
        <div className="mt-[50px] w-4/5 h-[250px] mx-auto border-solid border-2 border-[#b9e4ed] rounded-3xl shadow-xl">
          <p className=" pt-[65px] text-6xl text-center">
            {isFinished ? "" : inputWord}
          </p>
        </div>
      </div>
      {/* <div className="ml-[10%]">
        <p>correct:{correct}</p>
        <p>wrong:{incorrect}</p>
        <p>finished words:{finish_word}</p>
        <p>is time limited:{}</p>
        <p>limit time:{typeof time === "number" ? time : "no limit"}</p>
        <p>elapsed time:{seconds}</p>
      </div> */}
    </div>
  );
}
