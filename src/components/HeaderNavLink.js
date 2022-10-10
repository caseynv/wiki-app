import Navlinks from "./Navlinks";
import Logo from "../assets/wikipedia.svg";
import { Link } from "react-router-dom";

const HeaderNavLink = () => {
  return (
    <div className={`hidden lg:flex justify-between py-4 px-20 items-center`}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Navlinks />
    </div>
  );
};

export default HeaderNavLink;
