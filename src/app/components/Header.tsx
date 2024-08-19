import { font } from "../../../font/font";
import Link from "next/link";
export default function Header() {
  return (
    <div
      className={`${font.className} pt-5 pl-5 text-3xl w-full h-[80px] mb-[100px] bg-[#96f5cc] drop-shadow-lg`}
    >
      <Link href="/">Typing Game</Link>
    </div>
  );
}
