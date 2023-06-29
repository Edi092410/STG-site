import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navbar = [
    {
      name: "Нүүр",
      to: "/",
      key: "page",
      disabled: false,
    },
    {
      name: "Бүтээгдэхүүн",
      to: "/produc",
      key: "product",
      disabled: true,
    },
    {
      name: "Үйлчилгээ",
      to: "/service/list",
      key: "service",
      disabled: false,
    },
    {
      name: "Сургалт",
      to: "/course",
      key: "course",
      disabled: true,
    },
    {
      name: "Бичвэр",
      to: "/article",
      key: "article",
      disabled: true,
    },
  ];

  return (
    <div className="absolute">
      <ul className="flex text-center text-slate-400 text-xs">
        {navbar.map((prop, index) =>
          prop.disabled ? (
            <li key={prop.key} className="mr-5 opacity-50 cursor-not-allowed">
              {prop.name}
            </li>
          ) : (
            <li key={prop.key} className="mr-5">
              <NavLink
                to={prop.to}
                className="hover:pb-[10px] hover:border-b-2 hover:border-white hover:text-white transition-all duration-300"
              >
                {prop.name}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
