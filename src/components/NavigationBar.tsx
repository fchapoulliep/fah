import React, { useEffect, useState } from "react";
import "../css/NavigationBar.css";

import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import LogoTypo from "../images/FAHLogoTypo.png";
import LogoIco from "../images/FAHLogoIco.png";

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navigation-bar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navigation-bar-menu">
        <MenuOutlined className="menu-icon" style={{ paddingLeft: "24px" }} />
        <SearchOutlined className="menu-icon" />
      </div>
      <div className="navigation-bar-logo">
        <Link to="/">
          <img src={isScrolled ? LogoIco : LogoTypo} alt="Logo" />
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
