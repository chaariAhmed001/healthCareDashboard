import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHeartBeats } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { icon2, icon3, links } from "../Data/data";
import { appContext } from "../Context/appContext.js";

const SideBar = () => {
  const { closeMenu, setCloseMenu, activeMenu, setActiveMenu } =
    useContext(appContext);

  const [activeSubMenu, setActiveSubMenu] = useState();
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [actevLink, setactevLink] = useState(false);

  const active =
    "p-1 font-bold rounded-md cursor-pointer gap-x-3 flex items-center justify-center text-secondary-color bg-main-bg mb-2 dark:bg-[#201A23]/75 dark:text-secondary-color/60";
  const noteActive =
    " p-1 font-bold rounded-md cursor-pointer gap-x-3 flex items-center justify-center text-primry-color hover:bg-main-bg hover:text-secondary-color dark:text-white dark:hover:text-secondary-color dark:hover:bg-[#201A23]/75 mb-2 p-2 ";
  const subMenuActive =
    "font-semibold capitalize flex items-center gap-x-4 cursor-pointer px-5 p-2 ml-6 rounded-md bg-main-bg text-secondary-color dark:bg-[#201A23]/75";
  const normalSubMenu =
    "font-semibold capitalize flex items-center gap-x-4 cursor-pointer px-5 p-2 ml-6 rounded-md text-primry-color hover:bg-main-bg hover:text-secondary-color dark:text-white dark:hover:text-secondary-color dark:hover:bg-[#201A23]/75";
  return (
    <div className="h-[630px] p-4 pt-8 md:overflow-hidden overflow-auto md:hover:overflow-auto w-full text-secondary-color">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex gap-2 items-center text-2xl font-bold ">
          <svg
            className={activeMenu && " duration-500 rotate-[360deg] "}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
              stroke="#141B41"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentcolor"
            />
            <path
              d="M7.20996 16C8.25996 17.51 10.02 18.5 12 18.5C13.98 18.5 15.73 17.51 16.79 16"
              stroke="#141B41"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span
            className={` dark:text-white mb-1 text-primry-color capitalize ${
              !activeMenu && "hidden"
            }`}
          >
            Healthcare
          </span>
        </Link>
        <TooltipComponent content="Menu" position="BottomCenter">
          <button
            type="button"
            className={`text-xl block ${!activeMenu && "hidden"} md:hidden `}
            onClick={() => setCloseMenu(!closeMenu)}
          >
            {icon2}
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-5">
        <ul>
          {links.map((link, index) => (
            <>
              <NavLink
                key={index}
                to={`/${ link.submenu ? link.links[0] : link.title}`}
                className={({ isActive }) => (isActive ? active : noteActive)}
                onClick={() => setactevLink(!actevLink)}
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center ${link.submenu && 'ml-3'}`}
                >
                  {link.icon}
                </span>
                <span className={` flex-1 ${!activeMenu && "hidden"}`}>
                  {link.title}
                </span>
                {link.submenu && (
                  <div
                    onClick={() => {
                      setActiveSubMenu(index);
                      setOpenSubMenu(!openSubMenu);
                    }}
                    className="w-8 h-8"
                  >
                    {icon3}
                  </div>
                )}
              </NavLink>
              {link.submenu &&
                activeSubMenu === index &&
                openSubMenu &&
                link.links.map((link, index) => (
                  <NavLink
                    to={`/${link}`}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? subMenuActive : normalSubMenu
                    }
                    onClick={() => setactevLink(!actevLink)}
                  >
                    {link}
                  </NavLink>
                ))}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
