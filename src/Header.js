import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{textDecoration:"none"}}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">EShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemUpper">Hello Guest</span>
          <span className="nav__itemLoweer">SignIn</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemUpper">Your</span>
          <span className="nav__itemLoweer">Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration:"none"}}>
          {
            <div className="nav__item">
              <ShoppingBasketIcon className="itemBasket" />
              <span className="nav__itemLoweer nav__basketCount">{basket.length}</span>
            </div>
          }
        </Link>
      </div>
    </div>
  );
}

export default Header;
