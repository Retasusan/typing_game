"use client";
import { font } from "../../font/font";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-green-300 to-slate-100">
      <div className="">
        <div
          className={`${font.className} pt-7 pl-5 text-6xl w-full h-[125px] bg-gradient-to-r from-sky-500 to-purple-500 mb-[100px]`}
        >
          Typing Game
        </div>
        <div className="w-4/5 h-[600px] pt-[50px] mx-auto justify-center items-center text-centerborder-none bg-gradient-to-b from-slate-500 to-indigo-500 max-w-[1000px] min-w-[600px]">
          <div className="mt-5 text-5xl text-gray-50 text-center">
            モード選択
          </div>
          <div className="flex flex-col mt-10">
            <Link
              href="/typing/1minute"
              className="mx-auto text-4xl border-solid bg-slate-50 w-1/2 text-center h-[70px] flex items-center justify-center bg-gradient-to-r from-white to-slate-400 rounded-lg"
            >
              1minute
            </Link>
            <Link
              href="/typing/2minutes"
              className="mt-7 mx-auto text-4xl border-solid bg-slate-50 w-1/2 text-center h-[70px] flex items-center justify-center bg-gradient-to-r from-white to-slate-400 rounded-lg"
            >
              2minutes
            </Link>
            <Link
              href="/typing/5minutes"
              className="mt-7 mx-auto text-4xl border-solid bg-slate-50 w-1/2 text-center h-[70px] flex items-center justify-center bg-gradient-to-r from-white to-slate-400 rounded-lg"
            >
              5minutes
            </Link>
            <Link
              href="/typing/endless"
              className="mt-7 mx-auto text-4xl border-solid bg-slate-50 w-1/2 text-center h-[70px] flex items-center justify-center bg-gradient-to-r from-white to-slate-400 rounded-lg"
            >
              endless
            </Link>
          </div>
        </div>
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
