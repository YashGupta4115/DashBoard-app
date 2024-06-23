import {
  AiOutlineShoppingCart,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";

const NavBarItem = ({ item, handleClick }) => {
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
      <span className="navBar-icon-value">{item.navNumber}</span>
    </div>
  );
};

export default NavBarItem;
