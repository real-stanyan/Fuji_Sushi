"use client";

// import nextjs tools
import Link from "next/link";
import { usePathname } from "next/navigation";
// import react icon
import { RiMenu3Fill } from "react-icons/ri";
// import shadcn
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
// import VisuallyHidden for accessibility
import { VisuallyHidden } from "@reach/visually-hidden";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="relative flex w-[100vw] h-[90px] md:h-[150px] bg-[#222221] text-white">
      {/* logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center h-full gap-1">
        <h1 className="text-2xl md:text-4xl">FUJI SUSHI</h1>
        <p className="text-xs md:text-sm">JAPANESE DINING</p>
      </div>
      {/* menu icon */}
      <Drawer>
        <DrawerTrigger className="ml-auto pr-4 flex items-center">
          <RiMenu3Fill className="text-[30px] md:text-[50px]" />
        </DrawerTrigger>
        <DrawerContent
          side="right"
          className="flex flex-col justify-evenly items-center w-[100vw] h-[40vh]"
        >
          <VisuallyHidden>
            <DrawerTitle>Navigation Menu</DrawerTitle>
          </VisuallyHidden>
          <Link
            href="/"
            className={`nav_link ${pathname === "/" && "bg-[#94a3b8]"}`}
          >
            主页 / HOME
          </Link>
          <Link
            href="/WhatsOn"
            className={`nav_link ${pathname === "/WhatsOn" && "bg-[#94a3b8]"}`}
          >
            私たちについて / What's on
          </Link>
          <Link
            href="/Menu"
            className={`nav_link ${pathname === "/Menu" && "bg-[#94a3b8]"}`}
          >
            メニュー / Menu
          </Link>
          <Link
            href="/Booking"
            className={`nav_link ${pathname === "/Booking" && "bg-[#94a3b8]"}`}
          >
            予約 / Booking
          </Link>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
