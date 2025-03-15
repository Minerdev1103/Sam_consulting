import { useState, useEffect } from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${active ? "open" : ""} ${scrolling ? "scrolled" : ""}`}>
      <div className="logo">MySite</div>
      <button className="menu-toggle" onClick={() => setActive(!active)}>
        ☰
      </button>
      <ul className="nav-links">
        {["Home", "About", "Article", "Customer", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setActive(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
