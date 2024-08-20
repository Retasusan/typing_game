"use client";

import { useState, useEffect } from "react";
import { niceFont } from "../../..//font/niceFont";
import Link from "next/link";

type Props = {
  isCalled: boolean;
  isFinished: boolean;
};

export default function HelpModal({ isCalled, isFinished }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isFinished) {
      setIsOpen(false);
    }
  }, [isFinished]);

  useEffect(() => {
    if (isCalled) {
      setIsOpen(true);
    }
  }, [isCalled]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const clickReload = () => {
    window.location.reload();
  };

  onkeydown = (event) => {
    if (event.key === "Escape") {
      toggleModal();
    }
  };

  return (
    <div
      className={`${
        isFinished ? `pointer-events-none` : `pointer-events-auto`
      } w-full h-full absolute`}
    >
      {isOpen && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-4/5 h-[70%] bg-[#e4d8fc] rounded-2xl border-solid border-2 border-slate-400">
            <div className="w-full h-full flex justify-end relative">
              <button
                onClick={toggleModal}
                className="mt-[25px] mr-[25px] bg-[#F7C8E0] w-[100px] h-[40px] rounded-2xl border-solid border-[1px] border-slate-300 shadow-inner shadow-fuchsia-300"
              >
                Close
              </button>
              <div
                className={`${niceFont.className} absolute mt-[65px] mr-[10%] w-4/5 h-4/5 text-center`}
              >
                {/* <div className="text-4xl mt-3">WPM:{wpm}</div> */}
                <div className="mx-auto mt-12 h-[45px] w-[225px] rounded-xl border-solid border-[1px] border-white bg-[#58d0fc] shadow-2xl hover:bg-[#42c4f3] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                  <Link href="/" className="text-4xl">
                    Go to Home
                  </Link>
                </div>
                <div className="mx-auto mt-6 h-[45px] w-[225px] rounded-xl border-solid border-[1px] border-white bg-[#afe3ae] shadow-2xl hover:bg-[#91ea8e] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                  <button className="text-4xl" onClick={clickReload}>
                    Retry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
