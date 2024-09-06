"use client";

// import from react icon
import { CgMenuGridO } from "react-icons/cg";
import { IoCallSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
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

const FuncBtn = () => {
  const phoneNumber = "+61755317368";
  const mapLink =
    "https://www.google.com/maps/place/Fuji+Sushi/@-28.005352,153.4265499,17z/data=!3m2!4b1!5s0x6b91050d17cd4e6f:0xd7343a174a5c24fd!4m6!3m5!1s0x6b91054ba6923571:0x4f26498b1d0603e4!8m2!3d-28.005352!4d153.4291248!16s%2Fg%2F11j0j036j4?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="fixed right-4 bottom-4 w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center text-white text-2xl z-50">
      <Drawer className="p-12">
        <DrawerTrigger>
          <CgMenuGridO />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">Contact Us</DrawerTitle>
          </DrawerHeader>
          <div className="flex justify-evenly items-center p-[20px] md:p-[50px]">
            <div
              className="flex justify-center items-center text-white text-4xl bg-black w-[100px] h-[100px] rounded-full"
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            >
              <IoCallSharp />
            </div>
            <div
              className="flex justify-center items-center text-white text-4xl bg-black w-[100px] h-[100px] rounded-full"
              onClick={() => window.open(mapLink, "_blank")}
            >
              <FaMapLocationDot />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FuncBtn;
