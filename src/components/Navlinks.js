

const Navlinks = () => {
  const links = [
    { address: "/", title: "Home" },
    { address: "/Dashboard", title: "Dashboard" },
    { address: "/Leaderboard", title: "Leaderboard" },
  ];

  return (
    <div>
      <ul className="flex items-center">
        {links.map((link, i) => {
          return (
            <li key={i} className="ml-10 font-semibold text-normal sys_black">
              <a href={link.address}>{link.title}</a>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};

export default Navlinks;
