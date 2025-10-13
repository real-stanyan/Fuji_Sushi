// import nextjs tools
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  openGraph: {
    images: [
      { url: "/graph.webp", width: 1200, height: 630, alt: "Fuji Sushi" },
    ],
  },
};

export default function Home() {
  return (
    <div className="relative w-full min-h-[100svh] md:min-h-screen overflow-x-hidden">
      {/* bg video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bgImages/bg_video.mp4" type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

      {/* content */}
      <div
        className="
          relative z-10 flex min-h-[inherit] items-end justify-center p-4
          pb-[max(env(safe-area-inset-bottom),1rem)]
        "
      >
        <nav
          className={`
            font-pwc w-full max-w-[680px]
            rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md
            shadow-[0_10px_30px_rgba(0,0,0,0.45)]
            text-white
            px-6 py-6 flex flex-col gap-4
          `}
          aria-label="Primary"
        >
          <Link
            href="https://bopple.app/fuji-sushi"
            className={`
              relative flex flex-col items-center gap-3
              rounded-xl px-5 py-2
              font-JosefinSans text-xl md:text-3xl font-bold
              bg-black hover:brightness-110 active:brightness-95
              shadow-lg shadow-[#c3201e]/30
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-white/80 transition
            `}
            aria-label="Order on Bopple"
          >
            {/* 折扣提示 */}
            <div
              className={`
                absolute -top-6 text-sm md:text-base font-semibold
                bg-yellow-400 text-black px-3 py-1 rounded-full
                shadow-md animate-bounce
              `}
            >
              Welcome Gift 🎉 Use code{" "}
              <span className="font-bold">FIRST8OFF</span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Bopple"
                className="w-12 h-12 md:w-15 md:h-15 object-contain"
                sizes="(max-width: 768px) 64px, 80px"
              />
              <h1 className="text-center pr-2 md:pr-4">
                Order <br className="md:hidden" />
                (Deliver / Pickup)
              </h1>
            </div>
          </Link>
          <Link
            href="/Menu"
            className={`
              group inline-flex items-center justify-center gap-3
              rounded-xl px-4 py-3
              text-xl md:text-3xl font-bold
              ring-1 ring-white/10 hover:ring-white/25
              transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b53ff]
            `}
            aria-label="View Menu"
          >
            <span>メニュー / Menu</span>
            <Image
              src="/menu_icons/new.webp"
              width={40}
              height={40}
              alt="New"
              className="h-8 w-8 md:h-10 md:w-10 shrink-0"
              sizes="(max-width: 768px) 40px, 48px"
            />
          </Link>

          <Link
            href="/BookingFull"
            className={`
              inline-flex items-center justify-center
              rounded-xl px-4 py-3
              text-xl md:text-3xl font-bold
              ring-1 ring-white/10 hover:ring-white/25
              transition
              hover:bg-white/5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b53ff]
            `}
            aria-label="Booking"
          >
            予約 / Booking
          </Link>
        </nav>
      </div>
    </div>
  );
}
