import React from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "../assets/home.png";

import CartIcon from "../assets/shopping-bag.png";
import AccountIcon from "../assets/profile.png";

const navItems = [
  { label: "Home", icon: HomeIcon, to: "/" },
  
  { label: "Cart", icon: CartIcon, to: "/cart" },
  { label: "Account", icon: AccountIcon, to: "/account" },
];

const BottomNavigation: React.FC = () => {
  return (
    <nav
      className="
        fixed bottom-4 inset-x-4 bg-white border shadow-md flex justify-around
        py-2 z-50 rounded-full max-w-lg mx-auto
      "
      role="navigation"
      aria-label="Bottom navigation"
    >
      {navItems.map(({ label, icon, to }) => (
        <NavLink
          key={label}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center text-xs font-medium px-5 py-2 rounded-full transition-colors ${
              isActive
                ? "text-green-600 bg-green-100"
                : "text-gray-600 hover:text-green-500 focus:outline-none focus:text-green-600"
            }`
          }
        >
          <img src={icon} alt={`${label} icon`} className="w-6 h-6 mb-1" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavigation;
