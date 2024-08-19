import dynamic from "next/dynamic";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TypingGame = dynamic(() => import("../..//TypingGame"), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="bg-[#e3f3f9] h-[1000px]">
        <Header />
        <TypingGame />
      </div>
      <Footer />
    </main>
  );
}
