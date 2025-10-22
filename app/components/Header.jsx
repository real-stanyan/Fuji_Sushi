"use client";

import Link from "next/link";
import Image from "next/image";
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
import { useState, useEffect } from "react"; // Import useState and useEffect
import { Instagram, Facebook } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage Drawer

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false); // Function to close Drawer

  // Effect to handle background color change on scroll

  return (
    <div
      className={`fixed top-0 left-0 grid w-full h-[90px] md:h-[120px] bg-black text-white z-50 px-4`}
      style={{
        gridTemplateColumns: "1fr auto 1fr", // 定义三列布局
      }}
    >
      {/* Left-aligned logo image */}
      <Link href="/" className="flex items-center justify-start">
        <div className="relative w-[80px] h-[48px] md:w-[150px] md:h-[90px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </Link>

      {/* Centered logo text */}
      <Link
        href="/"
        className="flex flex-col justify-center items-center h-full place-self-center overflow-hidden"
      >
        <h1 className="text-2xl md:text-4xl overflow-hidden font-JosefinSans">
          FUJI SUSHI
        </h1>
        <p className="text-xs md:text-sm tracking-wider font-BebasNeue">
          JAPANESE DINING
        </p>
      </Link>

      {/* Right-aligned menu icon */}
      <div className="flex items-center justify-end">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger className="flex items-center" onClick={toggleDrawer}>
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
              href="/Menu"
              className={`nav_link ${pathname === "/Menu" && "bg-[#94a3b8]"}`}
              onClick={closeDrawer} // Close drawer on link click
            >
              メニュー / Menu
            </Link>
            <Link
              href="/Booking"
              className={`nav_link ${
                pathname === "/Booking" && "bg-[#94a3b8]"
              }`}
              onClick={closeDrawer} // Close drawer on link click
            >
              予約 / Booking
            </Link>
            <DrawerFooter className="w-full h-[100px] m-0 space-y-2">
              <div className="flex h-full w-full justify-center items-center gap-8">
                <Link href="https://www.instagram.com/fuji_sushi_surfers/?igsh=MXRuMnZvbHQ3emV2cA%3D%3D&utm_source=qr#">
                  <Instagram size={35} />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61580006815790&mibextid=wwXIfr&rdid=Nq7E8cBRDqzXXEyo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19dhbhiu2L%2F%3Fmibextid%3DwwXIfr#">
                  <Facebook size={35} />
                </Link>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
