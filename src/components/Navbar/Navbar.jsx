import React from "react";
import { NavLink } from "react-router-dom";
// import "../../assets/App.css"
export const Navbar = () => {

  const style = {
    paddingBottom: '10px',
    borderBottom: '2px solid white',
    color: 'white',
    transition: 'padding-bottom 0.3s, border-bottom 0.3s, color 0.3s, background-color 0.3s'
  }

  const navbar = [
    {
      name: "Нүүр",
      to: "/"
    },
    {
      name: "Бүтээгдэхүүн",
      to: "/login"
    },
    {
      name: "Үйлчилгээ",
      to: "/service/list"
    },
    {
      name: "Сургалт",
      to: "/register"
    },
    {
      name: "Бичвэр",
      to: "/"
    },
  ]

  return (
    <div className="absolute">
      <ul className="text-center text-slate-400 text-xs">
        {/* <li className="navbar-item inline-block mr-5">
          <NavLink 
            to='/'
            style={({ isActive }) => ({
              paddingBottom: isActive ? '10px' : 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              color: isActive ? 'white' : '',
              transition: 'padding-bottom 0.3s, border-bottom 0.3s, color 0.3s, background-color 0.3s'
            })}
            >Нүүр</NavLink>
        </li>
        <li className="navbar-item inline-block mr-5">Бүтээгдэхүүн</li>
        <li className="navbar-item inline-block mr-5">
          <NavLink 
          to='/service/list'
          style={({ isActive }) => ({
            paddingBottom: isActive ? '10px' : 'none',
            borderBottom: isActive ? '2px solid white' : 'none',
            color: isActive ? 'white' : '',
            transition: 'padding-bottom 0.3s, border-bottom 0.3s, color 0.3s, background-color 0.3s'
          })}
          >Үйлчилгээ</NavLink>
        </li>
        <li className="navbar-item inline-block mr-5">Сургалт</li>
        <li className="navbar-item inline-block mr-5">Бичвэр</li> */}
        <li>
        {navbar.map((prop) => (
          <NavLink 
              to={prop.to}
              className='inline-block mr-5 hover: pb-[10px] hover:border-b-2 hover:border-white hover:text-white'
              style={({ isActive }) => ({
                paddingBottom: isActive ? '10px' : 'none',
                borderBottom: isActive ? '2px solid white' : 'none',
                color: isActive ? 'white' : '',
                transition: 'padding-bottom 0.3s, border-bottom 0.3s, color 0.3s, background-color 0.3s'
              })}
          >
              {prop.name}
          </NavLink>
        ))}
        </li>
      </ul>
    </div>
  );
};
