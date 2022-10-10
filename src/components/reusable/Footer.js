import Logo from "../../assets/wikipedia.svg";
import FooterTab from "../FooterTab";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
//import Copyright from "../../assets/icons/copyright.svg";
import email from "../../assets/icons/mail.svg";
import github from "../../assets/icons/github.svg";
//import web from "../../assets/icons/website.png";

const Footer = () => {
  
  return (
    <footer className="w-full flex h-18 items-center sys_bg_black text-white mt-12 p-4">
      <div className="flex m-auto justify-between w-5/6">
        <img src={Logo} alt="logo" />
        <div>
          <FooterTab title="Socials" />
          <div className="flex justify-between items-center">
            <a className="pr-4" href="#" target="_blank" rel="noreferrer">
              <img className="mr-6" src={Instagram} alt="instagram" />
            </a>
            <a className="pr-4" href="#" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="twitter" />
            </a>
            <a className="pr-4" href="#" target="_blank" rel="noreferrer">
              <img src={email} alt="email" />
            </a>
            <a className="pr-4" href="#" target="_blank" rel="noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
      {/*<div className="mt-8 flex justify-start lg:justify-center">
        <img className="w-72" src={Copyright} alt="copyright" />
      </div>*/}
    </footer>
  );
};

export default Footer;
