import { font } from "../../font/font";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-[#e3f3f9] to-[#58d0fc] h-[1000px] min-w-[600px]">
        <Header />
        <div className="w-4/5 h-[600px] mx-auto justify-center items-center text-centerborder-none max-w-[1000px] min-w-[600px] shadow-xl bg-white rounded-2xl">
          <div
            className={`${font.className} mt-[125px] pt-20 text-5xl text-center mb-20`}
          >
            GAME MODE
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div className="flex flex-row w-[75%] mx-auto justify-between">
              <Link
                href="/typing/1minute"
                className={`${font.className} w-[40%] mx-auto text-[25px] border-solid min-w-[200px] max-w-[300px] text-center h-[70px] flex items-center justify-center bg-[#93d3e0] rounded-lg text-white hover:bg-[#85d5e6] transition transform hover:-translate-y-1 hover:shadow-lg`}
              >
                1 minute
              </Link>
              <Link
                href="/typing/3minutes"
                className={`${font.className} w-[40%] mx-auto text-[25px] border-solid min-w-[200px] max-w-[300px] text-center h-[70px] flex items-center justify-center bg-[#fab2aa] rounded-lg text-white hover:bg-[#fbaba2] transition transform hover:-translate-y-1 hover:shadow-lg`}
              >
                3 minutes
              </Link>
            </div>
            <div className="flex flex-row w-[75%] mx-auto justify-between">
              <Link
                href="/typing/5minutes"
                className={`${font.className} w-[40%] mx-auto text-[25px] border-solid min-w-[200px] max-w-[300px] text-center h-[70px] flex items-center justify-center bg-[#f7d28e] rounded-lg text-white hover:bg-[#fbd48c] transition transform hover:-translate-y-1 hover:shadow-lg`}
              >
                5 minutes
              </Link>
              <Link
                href="/typing/endless"
                className={`${font.className} w-[40%] mx-auto text-[25px] border-solid min-w-[200px] max-w-[300px] text-center h-[70px] flex items-center justify-center bg-[#b3e097] rounded-lg text-white hover:bg-[#a7da88] transition transform hover:-translate-y-1 hover:shadow-lg`}
              >
                endless
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
