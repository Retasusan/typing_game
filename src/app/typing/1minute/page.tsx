"use client";
import { font } from "../../../../font/font";
import dynamic from "next/dynamic";
import Link from "next/link";
import Modal from "./Modal";

const TypingGame = dynamic(() => import("./TypingGame1minute"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-green-300 to-slate-100">
      <div className="">
        <div
          className={`${font.className} pt-7 pl-5 text-6xl w-full h-[125px] bg-gradient-to-r from-sky-500 to-purple-500 mb-[100px]`}
        >
          <Link href="/" className="">
            Typing Game
          </Link>
        </div>
        <TypingGame />
        <div className="mt-[200px] h-[125px] bg-slate-400 pl-5 pt-10">
          <p>Created by Retasusan</p>
          <a
            href="https://www.retasusan.com"
            className="hover:text-blue-500 visited:text-purple-500"
          >
            Retasusan's blog
          </a>
        </div>
      </div>
    </main>
  );
}
