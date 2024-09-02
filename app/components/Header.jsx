"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
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
import { VisuallyHidden } from "@reach/visually-hidden";
import { useState } from "react"; // Import useState

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage Drawer

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false); // Function to close Drawer

  return (
    <div className="fixed top-0 left-0 flex w-[100vw] h-[90px] md:h-[150px] text-white z-50">
      {/* logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center h-full gap-1">
        <h1 className="text-2xl md:text-4xl">FUJI SUSHI</h1>
        <p className="text-xs md:text-sm">JAPANESE DINING</p>
      </div>
      {/* menu icon */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger
          className="ml-auto pr-4 flex items-center"
          onClick={toggleDrawer}
        >
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
            onClick={closeDrawer} // Close drawer on link click
          >
            主页 / HOME
          </Link>
          <Link
            href="/WhatsOn"
            className={`nav_link ${pathname === "/WhatsOn" && "bg-[#94a3b8]"}`}
            onClick={closeDrawer} // Close drawer on link click
          >
            私たちについて / What&apos;s on
          </Link>
          <Link
            href="/Menu"
            className={`nav_link ${pathname === "/Menu" && "bg-[#94a3b8]"}`}
            onClick={closeDrawer} // Close drawer on link click
          >
            メニュー / Menu
          </Link>
          <Link
            href="/Booking"
            className={`nav_link ${pathname === "/Booking" && "bg-[#94a3b8]"}`}
            onClick={closeDrawer} // Close drawer on link click
          >
            予約 / Booking
          </Link>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
