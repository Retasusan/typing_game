import { font } from "../../../font/font";
import Link from "next/link";
export default function Header() {
  return (
    <div
      className={`${font.className} pt-5 pl-5 text-3xl w-full h-[80px] mb-[100px] bg-gradient-to-br from-[#96f5cc] to-[#cdf8e5] drop-shadow-lg`}
    >
      <Link href="/">Typing Game</Link>
    </div>
  );
}
