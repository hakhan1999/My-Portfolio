import React from "react";
import { navigation } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navigation.map((item) => (
          <li>
            <a href={item.url} key={item.id}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
