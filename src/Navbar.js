import React, { useState, useRef, useEffect } from "react";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { links, social } from "./data";

const Navbar = () => {
  const [showlinks, setShowLinks] = useState(false);
  const refLinksContainer = useRef(null); //initial value set to null
  //   console.log(refLinksContainer.current);
  const refLinks = useRef(null);
  //   console.log(refLinks.current);

  const toggleLinks = () => {
    setShowLinks(!showlinks);
  };

  useEffect(() => {
    const linksHeight = refLinks.current.getBoundingClientRect().height;

    if (showlinks) {
      //if true , then add the height(linksHeight) to the refLinksContainer
      refLinksContainer.current.style.height = `${linksHeight}px`;
    } else {
      refLinksContainer.current.style.height = `0px`;
    }
    // console.log(linksHeight);
  }, [showlinks]); //runs only when the state of showlinks changes

  return (
    <nav>
      <div className="nav-center">
        {/* logo and hamburger */}
        <div className="nav-header">
          <IoLogoReact id="logo" />

          <button className="nav-toggle" onClick={toggleLinks}>
            <AiOutlineBars id="ham" />
          </button>
        </div>

        {/* links container */}
        <div className="links-container" ref={refLinksContainer}>
          <ul className="links" ref={refLinks}>
            {links.map((link) => {
              //   console.log(link);
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social icons */}
        <ul className="social-icons">
          {social.map((icons) => {
            //   console.log(link);
            const { id, url, icon } = icons;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
