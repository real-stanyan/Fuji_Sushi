import Sashimi from "./pages/Sashimi";
import Nigiri from "./pages/Nigiri";
import Combo from "./pages/Combo";
import FujiRolls from "./pages/FujiRolls";
import Appetiser from "./pages/Appetiser";
import FriedDishes from "./pages/FriedDishes";
import Salad from "./pages/Salad";
import MainDishes from "./pages/MainDishes";

const Menu = () => {
  return (
    <div className="bg-menu-bg object-cover pt-[90px] md:pt-[120px] w-[100vw] min-h-[100vh]">
      <MainDishes />
    </div>
  );
};

export default Menu;
