import {
  BsPerson,
  BsHeart,
  BsCart2,
  BsLaptop,
  BsPrinter,
  BsCartCheck,
  BsTruck,
} from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiDesktop } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdCompare } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export const icons = {
  personIcon: <BsPerson size={24} />,
  heartIcon: <BsHeart size={24} />,
  cartIcon: <BsCart2 size={24} />,
  languageIcon: <IoLanguage size={24} />,
  emailIcon: <HiOutlineMailOpen size={24} />,
  compare: <MdCompare size={24} />,
  deleteIcon: <AiOutlineDelete size={24} />,
};

export const langauge = {
  english: "English",
  arabic: "عربى",
};

export const categoryIcon = [
  {
    title: "Computers",
    icon: <CiDesktop className="my-4 h-10 w-10 cursor-pointer" />,
  },

  {
    title: "Laptop",
    icon: <BsLaptop className="my-4 h-10 w-10 cursor-pointer" />,
  },

  {
    title: "Printer",
    icon: <BsPrinter className="my-4 h-10 w-10 cursor-pointer" />,
  },
];

export const feAccount = [
  {
    title: "My Account Information",
    links: [
      {
        name: "My Profile",
        pathdir: "Profile",
        icon: <CgProfile />,
      },
      {
        name: "My Address",
        pathdir: "Address",
        icon: <BsTruck />,
      },
    ],
  },

  {
    title: "My Orders",
    links: [
      {
        name: "Manage Orders",
        pathdir: "Orders",
        icon: <BsCartCheck />,
      },
    ],
  },

  {
    title: "Preference",
    links: [
      {
        name: "WishList",
        pathdir: "Wishlist",
        icon: <BsHeart />,
      },
    ],
  },
];

// export const links = [
//   {
//     title: "Dashboard",
//     links: [
//       {
//         name: "Ecommerce",
//         icon: <FiShoppingBag />,
//       },
//     ],
//   },

//   {
//     title: "Pages",
//     links: [
//       {
//         name: "orders",
//         icon: <AiOutlineShoppingCart />,
//       },
//       {
//         name: "employees",
//         icon: <IoMdContacts />,
//       },
//       {
//         name: "customers",
//         icon: <RiContactsLine />,
//       },
//     ],
//   },
//   {
//     title: "Apps",
//     links: [
//       {
//         name: "calendar",
//         icon: <AiOutlineCalendar />,
//       },
//       {
//         name: "kanban",
//         icon: <BsKanban />,
//       },
//       {
//         name: "editor",
//         icon: <FiEdit />,
//       },
//       {
//         name: "color-picker",
//         icon: <BiColorFill />,
//       },
//     ],
//   },
//   {
//     title: "Charts",
//     links: [
//       {
//         name: "line",
//         icon: <AiOutlineStock />,
//       },
//       {
//         name: "area",
//         icon: <AiOutlineAreaChart />,
//       },

//       {
//         name: "bar",
//         icon: <AiOutlineBarChart />,
//       },
//       {
//         name: "pie",
//         icon: <FiPieChart />,
//       },
//       {
//         name: "financial",
//         icon: <RiStockLine />,
//       },
//       {
//         name: "color-mapping",
//         icon: <BsBarChart />,
//       },
//       {
//         name: "pyramid",
//         icon: <GiLouvrePyramid />,
//       },
//       {
//         name: "stacked",
//         icon: <AiOutlineBarChart />,
//       },
//     ],
//   },
// ];
