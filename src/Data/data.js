import { AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { BsCalendarWeek } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { RiLogoutCircleRLine, RiPagesLine } from "react-icons/ri";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import avatar from "./man.png";
import avatar0 from "./avatar.svg";
import avatar1 from "./avatar (1).svg";
import avatar2 from "./avatar (2).svg";
import avatar3 from "./avatar (3).svg";
import avatar4 from "./avatar (4).svg";
import avatar5 from "./avatar (5).svg";

export const links = [
  {
    title: "Dashboard",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto stroke-[#141B41] hover:stroke-secondary-color dark:stroke-white"
      >
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9.5H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.5H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Appointments",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto stroke-[#141B41] dark:stroke-white"
      >
        <path
          d="M8 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Chats",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto"
      >
        <path
          d="M8.5 19.8018H8C4 19.8018 2 18.8018 2 13.8018V8.80176C2 4.80176 4 2.80176 8 2.80176H16C20 2.80176 22 4.80176 22 8.80176V13.8018C22 17.8018 20 19.8018 16 19.8018H15.5C15.19 19.8018 14.89 19.9518 14.7 20.2018L13.2 22.2018C12.54 23.0818 11.46 23.0818 10.8 22.2018L9.3 20.2018C9.14 19.9818 8.77 19.8018 8.5 19.8018Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 8.80176H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13.8018H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Patients",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto"
      >
        <path
          d="M12 12.8018C14.7614 12.8018 17 10.5632 17 7.80176C17 5.04033 14.7614 2.80176 12 2.80176C9.23858 2.80176 7 5.04033 7 7.80176C7 10.5632 9.23858 12.8018 12 12.8018Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.59 22.8018C20.59 18.9318 16.74 15.8018 12 15.8018C7.26 15.8018 3.41 18.9318 3.41 22.8018"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    open: false,
    links: ["patients", "employees"],
  },
  {
    title: "Iditor",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto"
      >
        <path
          d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "ToDo",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto"
      >
        <path
          d="M12.37 8.88H17.62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.38 8.88L7.13 9.63L9.38 7.38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.37 15.88H17.62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.38 15.88L7.13 16.63L9.38 14.38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pages",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto"
      >
        <path
          d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6 2H15.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 5C7 3.34 8.34 2 10 2H12.62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 8V14.19C22 15.74 20.74 17 19.19 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    submenu: true,
    open: false,
    links: ["login", "logout", "signin", "passwordRecovery", "notFound"],
  },
];
export const icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="m-auto"
  >
    <path
      d="M3 7H21"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 12H21"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 17H21"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
export const icon2 = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.17 14.83L14.83 9.16998"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.83 14.83L9.17 9.16998"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const icon3 = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-1/2 m-auto"
  >
    <path
      d="M17.92 8.98175H11.69H6.07999C5.11999 8.98175 4.63999 10.1418 5.31999 10.8218L10.5 16.0017C11.33 16.8317 12.68 16.8317 13.51 16.0017L15.48 14.0317L18.69 10.8218C19.36 10.1418 18.88 8.98175 17.92 8.98175Z"
      fill="currentcolor"
    />
  </svg>
);
export const navBarIcons = [
  {
    name: "notification",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          d="M12.02 2.90997C8.71 2.90997 6.02 5.59997 6.02 8.90997V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z"
          stroke="#3F8EFC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
          stroke="#3F8EFC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06"
          stroke="#3F8EFC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
  {
    name: "chat",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          d="M8.5 19.8018H8C4 19.8018 2 18.8018 2 13.8018V8.80176C2 4.80176 4 2.80176 8 2.80176H16C20 2.80176 22 4.80176 22 8.80176V13.8018C22 17.8018 20 19.8018 16 19.8018H15.5C15.19 19.8018 14.89 19.9518 14.7 20.2018L13.2 22.2018C12.54 23.0818 11.46 23.0818 10.8 22.2018L9.3 20.2018C9.14 19.9818 8.77 19.8018 8.5 19.8018Z"
          stroke="#3F8EFC"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9965 11.8018H16.0054"
          stroke="#3F8EFC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9955 11.8018H12.0045"
          stroke="#3F8EFC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.99451 11.8018H8.00349"
          stroke="#3F8EFC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "darkMode",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto "
      >
        <path
          d="M2.03 13.2218C2.39 18.3718 6.76 22.5618 11.99 22.7918C15.68 22.9518 18.98 21.2318 20.96 18.5218C21.78 17.4118 21.34 16.6718 19.97 16.9218C19.3 17.0418 18.61 17.0918 17.89 17.0618C13 16.8618 9 12.7718 8.98 7.94178C8.97 6.64178 9.24 5.41178 9.73 4.29178C10.27 3.05178 9.62 2.46178 8.37 2.99178C4.41 4.66178 1.7 8.65178 2.03 13.2218Z"
          stroke="#3F8EFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
export const searchIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-3 flex-none "
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 22L20 20"
      stroke="#3F8EFC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const notificationData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];
export const chatData = [
  {
    image: avatar0,
    message: "Roman Joined the Team!",
    desc: "Salma sent you new message",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "can we fixe an appointment",
    desc: "Jaun sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar1,
    message: "Task completed",
    desc: "Roman sent you new message",
    time: "4:39 AM",
  },
  {
    image: avatar5,
    message: "can we change appointment date",
    desc: "Jolly sent you new message",
    time: "1:12 AM",
  },
];

export const userProfilData = [
  {
    text: "User Profil",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto stroke-[#141B41] dark:stroke-white"
      >
        <path
          d="M12 12.8018C14.7614 12.8018 17 10.5632 17 7.80176C17 5.04033 14.7614 2.80176 12 2.80176C9.23858 2.80176 7 5.04033 7 7.80176C7 10.5632 9.23858 12.8018 12 12.8018Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.59 22.8018C20.59 18.9318 16.74 15.8018 12 15.8018C7.26 15.8018 3.41 18.9318 3.41 22.8018"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Appointments",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto stroke-[#141B41] dark:stroke-white"
      >
        <path
          d="M8 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "ToDO",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto stroke-[#141B41] dark:stroke-white"
      >
        <path
          d="M12.37 8.88H17.62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.38 8.88L7.13 9.63L9.38 7.38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.37 15.88H17.62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.38 15.88L7.13 16.63L9.38 14.38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "LogOut",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto stroke-[#141B41] dark:stroke-white"
      >
        <path
          d="M17.4399 15.4218L19.9999 12.8618L17.4399 10.3018"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.76001 12.8618H19.93"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.76 20.8018C7.34001 20.8018 3.76001 17.8018 3.76001 12.8018C3.76001 7.80176 7.34001 4.80176 11.76 4.80176"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
export const cards = [
  {
    text: "Earning",
    valeu: "48,625.36",
    stat: "25",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001H7.00141C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    up: true,
  },
  {
    text: "Total Patients",
    valeu: "125",
    stat: "42",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          d="M18 7.96176C17.94 7.95176 17.87 7.95176 17.81 7.96176C16.43 7.91176 15.33 6.78176 15.33 5.38176C15.33 3.95176 16.48 2.80176 17.91 2.80176C19.34 2.80176 20.49 3.96176 20.49 5.38176C20.48 6.78176 19.38 7.91176 18 7.96176Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.97 15.2418C18.34 15.4718 19.85 15.2318 20.91 14.5218C22.32 13.5818 22.32 12.0418 20.91 11.1018C19.84 10.3918 18.31 10.1518 16.94 10.3918"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.96998 7.96176C6.02998 7.95176 6.09998 7.95176 6.15998 7.96176C7.53998 7.91176 8.63998 6.78176 8.63998 5.38176C8.63998 3.95176 7.48998 2.80176 6.05998 2.80176C4.62998 2.80176 3.47998 3.96176 3.47998 5.38176C3.48998 6.78176 4.58998 7.91176 5.96998 7.96176Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15.2418C5.63 15.4718 4.12 15.2318 3.06 14.5218C1.65 13.5818 1.65 12.0418 3.06 11.1018C4.13 10.3918 5.66 10.1518 7.03 10.3918"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.4317C11.94 15.4217 11.87 15.4217 11.81 15.4317C10.43 15.3817 9.32996 14.2517 9.32996 12.8517C9.32996 11.4217 10.48 10.2717 11.91 10.2717C13.34 10.2717 14.49 11.4317 14.49 12.8517C14.48 14.2517 13.38 15.3917 12 15.4317Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.08997 18.5817C7.67997 19.5217 7.67997 21.0617 9.08997 22.0017C10.69 23.0717 13.31 23.0717 14.91 22.0017C16.32 21.0617 16.32 19.5217 14.91 18.5817C13.32 17.5217 10.69 17.5217 9.08997 18.5817Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    up: true,
  },
  {
    text: "Surgery",
    valeu: "16",
    stat: "30",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6L8.65002 15.98"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 17.97L8.65002 7.97998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    up: false,
  },
  {
    text: "Apointments",
    valeu: "36",
    stat: "6",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          d="M8 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16H9.62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    up: true,
  },
];
export const upIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 9.5H16.5V11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const downIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 14.5L12.3 10.3L10.7 12.7L7.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 14.5H16.5V12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const up = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.92 15.8518L13.4 9.33177C12.63 8.56177 11.37 8.56177 10.6 9.33177L4.07996 15.8518"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const down = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.92 9.75177L13.4 16.2718C12.63 17.0418 11.37 17.0418 10.6 16.2718L4.07996 9.75177"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const analyticsChart = [
  [
    { x: "Mon", y: 21 },
    { x: "Tue", y: 24 },
    { x: "Wed", y: 36 },
    { x: "Thu", y: 38 },
    { x: "fri", y: 30 },
    { x: "Sat", y: 40 },
  ],
  [
    { x: "Mon", y: 15 },
    { x: "Tue", y: 40 },
    { x: "Wed", y: 32 },
    { x: "Thu", y: 28 },
    { x: "fri", y: 16 },
    { x: "Sat", y: 30 },
  ],
];
export const analyticsChartByMonth = [
  [
    { x: "Jan", y: 21 },
    { x: "Fev", y: 24 },
    { x: "Mar", y: 36 },
    { x: "Avr", y: 38 },
    { x: "May", y: 30 },
    { x: "Jun", y: 40 },
  ],
  [
    { x: "Jan", y: 18 },
    { x: "Fev", y: 40 },
    { x: "Mar", y: 32 },
    { x: "Avr", y: 28 },
    { x: "May", y: 16 },
    { x: "Jun", y: 30 },
  ],
];
export const analyticsChartByYear = [
  [
    { x: "2016", y: 21 },
    { x: "2017", y: 24 },
    { x: "2018", y: 36 },
    { x: "2019", y: 38 },
    { x: "2020", y: 30 },
    { x: "2021", y: 40 },
  ],
  [
    { x: "2016", y: 18 },
    { x: "2017", y: 40 },
    { x: "2018", y: 32 },
    { x: "2019", y: 28 },
    { x: "2020", y: 16 },
    { x: "2021", y: 30 },
  ],
];
export const lineCustomSeries = [
  {
    dataSource: analyticsChart[0],
    xName: "x",
    yName: "y",
    name: "New Patients",
    width: "2",
    marker: {
      visible: true,
      width: 10,
      height: 10,
      border: { color: "#141B41" },
    },
    type: "Line",
  },

  {
    dataSource: analyticsChart[1],
    xName: "x",
    yName: "y",
    name: "Old Patients",
    width: "2",
    marker: {
      visible: true,
      width: 10,
      height: 10,
      border: { color: "#3F8EFC" },
    },
    type: "Line",
  },
];
export const pieChartData = [
  { x: "New York", y: 45, text: "45%" },
  { x: "Los Angeles", y: 30, text: "30%" },
  { x: "Chicago", y: 20, text: "20%" },
  { x: "Rest", y: 5, text: "5%" },
];
export const rigthAroow = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.90997 20.7218L15.43 14.2018C16.2 13.4318 16.2 12.1718 15.43 11.4018L8.90997 4.88177"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const todyPatients = [
  {
    photo: avatar,
    time: "9 am",
    name: "Arisa Siuneo",
    Diagnosis: "Medical Chekup",
  },
  {
    photo: avatar2,
    time: "9:30 am",
    name: "Arisa Siuneo",
    Diagnosis: "Endoscopy",
  },
  {
    photo: avatar5,
    time: "11 am",
    name: "Arisa Siuneo",
    Diagnosis: "Medical Chekup",
  },
  {
    photo: avatar0,
    time: "14 pm",
    name: "Arisa Siuneo",
    Diagnosis: "Medical Chekup",
  },
];
export const deleteIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14001"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.33 16.5H13.66"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const eyeIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C13.98 8.41998 15.58 10.02 15.58 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const editIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.26 3.59997L5.05 12.29C4.74 12.62 4.44 13.27 4.38 13.72L4.01 16.96C3.88 18.13 4.72 18.93 5.88 18.73L9.1 18.18C9.55 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.89 5.04999C12.32 7.80999 14.56 9.91999 17.34 10.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const todayPatientsButtons = [
  {
    icon: eyeIcon,
    text: "Patient Details",
    color: "20, 27, 65",
  },
  {
    icon: editIcon,
    text: "Reschedule an appointment",
    color: "63, 142, 252",
    hoverColor: "primry-color",
  },
  {
    icon: deleteIcon,
    text: "Cancel appointment",
    color: "224, 142, 69",
  },
];
export const meetingIcon = (
  <svg
    width="30"
    height="32"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 7.96176C17.94 7.95176 17.87 7.95176 17.81 7.96176C16.43 7.91176 15.33 6.78176 15.33 5.38176C15.33 3.95176 16.48 2.80176 17.91 2.80176C19.34 2.80176 20.49 3.96176 20.49 5.38176C20.48 6.78176 19.38 7.91176 18 7.96176Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.97 15.2418C18.34 15.4718 19.85 15.2318 20.91 14.5218C22.32 13.5818 22.32 12.0418 20.91 11.1018C19.84 10.3918 18.31 10.1518 16.94 10.3918"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.96998 7.96176C6.02998 7.95176 6.09998 7.95176 6.15998 7.96176C7.53998 7.91176 8.63998 6.78176 8.63998 5.38176C8.63998 3.95176 7.48998 2.80176 6.05998 2.80176C4.62998 2.80176 3.47998 3.96176 3.47998 5.38176C3.48998 6.78176 4.58998 7.91176 5.96998 7.96176Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 15.2418C5.63 15.4718 4.12 15.2318 3.06 14.5218C1.65 13.5818 1.65 12.0418 3.06 11.1018C4.13 10.3918 5.66 10.1518 7.03 10.3918"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.4317C11.94 15.4217 11.87 15.4217 11.81 15.4317C10.43 15.3817 9.32996 14.2517 9.32996 12.8517C9.32996 11.4217 10.48 10.2717 11.91 10.2717C13.34 10.2717 14.49 11.4317 14.49 12.8517C14.48 14.2517 13.38 15.3917 12 15.4317Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.08997 18.5817C7.67997 19.5217 7.67997 21.0617 9.08997 22.0017C10.69 23.0717 13.31 23.0717 14.91 22.0017C16.32 21.0617 16.32 19.5217 14.91 18.5817C13.32 17.5217 10.69 17.5217 9.08997 18.5817Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const hospitalIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 22H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 8.5H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const universityIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 22H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.58 12H19.42"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99001 12V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M11.99 12V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M15.99 12V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
  </svg>
);

export const eventsData = [
  {
    icon: meetingIcon,
    title: "Meeting",
    desc: "with joe black",
    Time: "10:30AM- 11:00AM",
  },
  {
    icon: universityIcon,
    title: "Lecture",
    desc: "Weill Cornell Medicine",
    Time: "15:00PM- 16:30PM",
  },
  {
    icon: hospitalIcon,
    title: "Metting",
    desc: "Board Meeting",
    Time: "17:30PM- 18:30PM",
  },
];
export const areaChartData = [
  { x: new Date(2018, 0, 1), y: 30 },
  { x: new Date(2019, 0, 1), y: 35 },
  { x: new Date(2020, 0, 1), y: 48 },
  { x: new Date(2021, 0, 1), y: 38 },
  { x: new Date(2022, 0, 1), y: 35 },
];
export const areaCustomSeries = [
  {
    dataSource: areaChartData,
    xName: "x",
    yName: "y",
    name: "USA",
    opacity: "0.5",
    type: "SplineArea",
    width: "2",
  },
];
export const areaPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  majorGridLines: { width: 0 },
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  labelStyle: { color: "gray" },
};
export const areaPrimaryYAxis = {
  labelFormat: "{value}K",
  lineStyle: { width: 0 },
  minimum: 10,
  maximum: 50,
  interval: 10,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};

export const toDoList = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Run Payroll",
    desc: "Mar 1 at 8pm",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43L21.6999 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hire new secretary",
    desc: "Mar 12 at 8pm",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.89999 17H18.09C19.99 17 20.99 16 20.99 14.1V2H2.98999V14.1C2.99999 16 3.99999 17 5.89999 17Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 2H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22L12 20V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22L12 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Lecture presentation",
    desc: "Mar 15 at 8pm",
  },
];
export const commentsList = [
  {
    image: avatar0,
    name: "Joe keery",
    comments: "Lorem ipsum dolor",
  },
  {
    image: avatar1,
    name: "Salma bennani",
    comments: "Lorem ipsum dolor",
  },
  {
    image: avatar2,
    name: "Marie reim",
    comments: "Lorem ipsum dolor",
  },
];
