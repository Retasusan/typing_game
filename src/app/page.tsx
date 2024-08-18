import dynamic from "next/dynamic";

const TypingGame = dynamic(() => import("./TypingGame"), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="">
          <h1 className="text-5xl mb-20 p-7 border-none bg-gradient-to-r from-sky-500 to-indigo-500">
            タイピングゲーム
          </h1>
        </div>
        <TypingGame />
      </div>
    </main>
  );
}
