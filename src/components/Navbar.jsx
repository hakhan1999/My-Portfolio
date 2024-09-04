import React from "react";
import { navigation } from "../data";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navigation.map((item) => (
          <li key={item.id}>
            <a href={item.url} key={item.id}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
