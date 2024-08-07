import { useContext } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { UserContext } from "../../Context/UserContext";

const NavBarItem = ({ item, handleClick }) => {
  const { userDoc } = useContext(UserContext);
  console.log(userDoc[item.name.toLowerCase()]);
  const iconMapping = {
    AiOutlineShoppingCart: AiOutlineShoppingCart,
    AiOutlineMessage: AiOutlineMessage,
    AiOutlineBell: AiOutlineBell,
  };

  const IconComponent = iconMapping[item.icon];

  return (
    <div className="navBar-icons-container" key={item.id}>
      <IconComponent
        className="navBar-icons"
        onClick={() => handleClick(item.afterClick)}
      />
      <span className="navBar-icon-value">
        {userDoc[item.name.toLowerCase()]
          ? userDoc[item.name.toLowerCase()].length
          : 0}
      </span>
    </div>
  );
};

export default NavBarItem;
