import React, { useContext, useState } from "react";
import "./Cart.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

import cartData from "../../../Assests/navBar.json";
import Button from "../../dashBoardItems/Button/Button";

import { SideBarContext } from "../../../Context/contextProvider";

const Cart = () => {
  const { handleClick } = useContext(SideBarContext);
  return (
    <div className="cart-container">
      <div className="navPopUp-title">
        <div>
          Cart
          {cartData.cartItems.length > 0 ? (
            <span>{`(${cartData.cartItems.length})`}</span>
          ) : (
            ""
          )}
        </div>
        <IoIosCloseCircleOutline
          className="navPopUp-toggleIcon"
          onClick={() => handleClick("cart")}
        />
      </div>
      <hr />
      {cartData.cartItems.map((item) => {
        return (
          <div key={item.id} className="item-box">
            <div></div>
            <div className="item-nameAndQuantity">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">{item.quantity}</span>
            </div>
            <div className="item-price">{item.price}</div>
          </div>
        );
      })}
      <Button color="#7352FF" text="CheckOut" width="100%" />
    </div>
  );
};

export default Cart;
