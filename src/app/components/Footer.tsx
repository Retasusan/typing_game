import { niceFont } from "../../../font/niceFont";
export default function Footer() {
  return (
    <div
      className={`${niceFont.className} h-[125px] bg-gradient-to-b from-[#eadabd] to-[#fcdca0] pt-5 pl-5`}
    >
      <p>This application is created by Retasusan</p>
      <a
        href="https://www.retasusan.com"
        className="hover:text-blue-500 visited:text-purple-500"
      >
        visit Retasusan's website
      </a>
    </div>
  );
}
