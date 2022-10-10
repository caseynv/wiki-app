import Logo from "../../assets/wikipedia.svg";
import BurgerMenu from "../../assets/icons/menu.svg";
import CancelMenu from "../../assets/icons/cancel_menu.svg";
import HeaderNavLink from "../HeaderNavLink"
import MobileNavlinks from "../MobileNavlinks";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [ShowMobile, setShowMobile] = useState(false);
  const [ScrollPosition, setScrollPosition] = useState(false);
  const [Menu, setMenu] = useState(BurgerMenu);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (window.pageYOffset >= 120) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  };

  const toggleShowMobile = () => {
    setShowMobile(!ShowMobile);
    if (Menu === BurgerMenu) {
      setMenu(CancelMenu);
    } else {
      setMenu(BurgerMenu);
    }
  };
  return (
    <header id="home" className="">
      <div className="sys_bg_white py-4 hidden lg:block">
        <HeaderNavLink />
      </div>
      <div
        className={`${
          ScrollPosition ? "show_scroll_nav" : "hide_scroll_nav"
        } fixed z-20 top-0 w-full transition duration-300 ease-in-out shadow-xl bg-white hidden lg:block`}
      >
        <HeaderNavLink />
      </div>
      <div className="fixed top-0 w-full lg:hidden z-20">
        <div className="flex justify-between py-4 px-3 items-center bg-white shadow-xl z-20">
          <Link to="/">
            <img style={{ width: "120px" }} src={Logo} alt="Logo" />
          </Link>
          <img
            onClick={toggleShowMobile}
            className="sys_bg_primary p-2 rounded"
            src={Menu}
            alt=""
          />
        </div>
        <div
          className={`${
            ShowMobile ? "translate-x-0" : "translate-x-full"
          } absolute w-full bg-white z-0 transition duration-150`}
        >
          <MobileNavlinks toggleShowMobile={toggleShowMobile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
