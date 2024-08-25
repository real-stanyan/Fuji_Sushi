// import nextjs tools
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-home-bg-mobile bg-cover bg-center min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col justify-evenly items-center text-white text-2xl md:text-4xl min-w-[85vw] min-h-[200px] md:min-w-[60vw] md:min-h-[400px] font-bold bg-black bg-opacity-50 rounded-xl p-4 ">
        <Link href="/WhatsOn">私たちについて / What&apos;s on</Link>
        <Link href="/Menu">メニュー / Menu</Link>
        <Link href="/Booking">予約 / Booking</Link>
      </div>
    </div>
  );
}
