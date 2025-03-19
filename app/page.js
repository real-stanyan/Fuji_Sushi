"use client";

// import nextjs tools
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(imageRef.current, { zIndex: 0 });
      },
    });
  }, []);

  return (
    <div className="bg-home-bg bg-cover object-left-top min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <Image
        ref={imageRef}
        src="/bgImages/home_init.webp"
        width={2000}
        height={2000}
        className="w-full h-full z-50 fixed object-cover object-left-top"
        alt="Background"
      />
      <div className="font-pwc z-10 flex flex-col justify-evenly items-center text-white text-2xl md:text-4xl min-w-[85vw] min-h-[200px] md:min-w-[60vw] md:min-h-[400px] font-bold bg-black bg-opacity-50 rounded-xl p-4 ">
        <Link href="/WhatsOn">私たちについて / What&apos;s on</Link>
        <Link href="/Menu">メニュー / Menu</Link>
        <Link href="/Booking">予約 / Booking</Link>
      </div>
    </div>
  );
}
