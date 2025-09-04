// import nextjs tools
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  openGraph: {
    images: [
      {
        url: "/graph.webp",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function Home() {
  return (
    <div
      className={`
        bg-[url('/bgImage/home_bg.webp')] lg:bg-[url('/bgImages/home_bg_PC.webp')] bg-cover object-left-top min-w-[100vw] min-h-[100vh] flex justify-center items-center overflow-x-hidden
        `}
    >
      <div
        className={`
          font-pwc z-10 flex flex-col justify-evenly items-center text-white text-2xl md:text-4xl min-w-[85vw] min-h-[200px] md:min-w-[60vw] 
          md:min-h-[400px] font-bold bg-black bg-opacity-50 rounded-xl p-4
          `}
      >
        <Link href="/Menu" className="flex justify-center items-center gap-2">
          メニュー / Menu
          <Image src="/menu_icons/new.webp" width={40} height={40} />
        </Link>
        <Link href="/Booking">予約 / Booking</Link>
        <Link href="https://bopple.app/fuji-sushi">
          ちゅうもん / Order(Delivery&Pickup)
        </Link>
      </div>
    </div>
  );
}
