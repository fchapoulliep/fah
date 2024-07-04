/**
 * Importing React and CSS
 */
import React from "react";
import "../css/NavigationBar.css";

/**
 * Importing Ant Design Icons
 */
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";

/**
 * Importing Menu component from Ant Design
 */
import { Link } from "react-router-dom";

/**
 * This component represents the navigation bar of the application.
 * It displays a logo and a menu, along with icons for user profile, wishlist, and shopping cart.
 */
const NavigationBar: React.FC = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-menu">
        <MenuOutlined className="menu-icon" style={{ paddingLeft: "24px" }} />
        <SearchOutlined className="menu-icon" />
      </div>
      <div className="navigation-bar-logo">
        <Link to={"/"}>
          <p>FAH</p>
        </Link>
      </div>
      <div className="navigation-bar-cart">
        <Link to="/inscription">
          <UserOutlined className="menu-icon" />
        </Link>
        <Link to="/wishlist">
          <HeartOutlined className="menu-icon" />
        </Link>
        <Link to="/cart">
          <ShoppingCartOutlined
            className="menu-icon"
            style={{ paddingRight: "24px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
