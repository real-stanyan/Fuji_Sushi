// import shandcn
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Menu = () => {
  return (
    <div className="bg-black w-[100vw] min-h-[100vh] pt-[90px]">
      <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4 text-white">
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
          <p>1234</p>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Menu;
