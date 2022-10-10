import PropTypes from "prop-types";

const MobileNavlinks = ({ toggleShowMobile }) => {
  const links = [
    { address: "/#home", title: "Home" },
    { address: "/#dashboard", title: "Dashboard" },
    { address: "/#leaderboard", title: "Leaderboard" },
  ];

  return (
    <div className="">
      <ul className="flex flex-col divide-y-2 sys_primary font-semibold text-normal justify-center items-center">
        {links.map((link, i) => {
          return (
            <li onClick={toggleShowMobile} key={i} className="py-3">
              <a href={link.address}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MobileNavlinks.propTypes = {
  toggleShowMobile: PropTypes.func,
}

export default MobileNavlinks;
