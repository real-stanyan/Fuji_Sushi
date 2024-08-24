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
  return (
    <div className="fixed right-4 bottom-4 w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center text-white text-2xl">
      <Drawer>
        <DrawerTrigger>
          <CgMenuGridO />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Contact Us</DrawerTitle>
          </DrawerHeader>
          <div className="flex justify-evenly items-center p-5">
            <div className="flex justify-center items-center text-white text-4xl bg-black w-[100px] h-[100px] rounded-full">
              <IoCallSharp />
            </div>
            <div className="flex justify-center items-center text-white text-4xl bg-black w-[100px] h-[100px] rounded-full">
              <FaMapLocationDot />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FuncBtn;
