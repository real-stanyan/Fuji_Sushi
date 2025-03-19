import Sashimi from "./pages/Sashimi";
import Nigiri from "./pages/Nigiri";
import Combo from "./pages/Combo";

const Menu = () => {
  return (
    <div className="bg-menu-bg object-cover pt-[90px] md:pt-[120px] w-[100vw] min-h-[100vh]">
      <Nigiri />
    </div>
  );
};

export default Menu;
