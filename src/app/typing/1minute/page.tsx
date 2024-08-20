"use client";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TypingGame = dynamic(() => import("../../TypingGame"), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-[#e3f3f9] to-[#58d0fc] h-[1000px] min-w-[600px]">
        <Header />
        <TypingGame time={4} />
      </div>
      <Footer />
    </main>
  );
}
