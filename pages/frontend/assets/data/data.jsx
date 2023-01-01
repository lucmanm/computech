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
import {
  HiOutlineMailOpen,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineSearch,
  HiMenu,
} from "react-icons/hi";
import { CiDesktop } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdCompare, MdLocationPin } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import aioimg from "../img/aioimg.jpg";
export const icons = {
  personIcon: <BsPerson size={24} />,
  heartIcon: <BsHeart size={24} />,
  cartIcon: <BsCart2 size={24} />,
  languageIcon: <IoLanguage size={24} />,
  emailIcon: <HiOutlineMailOpen size={24} />,
  compare: <MdCompare size={24} />,
  deleteIcon: <AiOutlineDelete size={24} />,
};

export const mobIcons = {
  personIc: <BsPerson size={24} />,
  heartIc: <BsHeart size={24} />,
  homeIc: <HiOutlineHome size={24} />,
  shopIc: <HiOutlineShoppingCart size={24} />,
  searchIc: <HiOutlineSearch size={24} />,
  menuIc: <HiMenu size={24} />,
};
export const langauge = {
  english: "English",
  arabic: "عربى",
};

export const ProdCatImag = [
  {
    id: 1,
    title: "All in One PC",
    image: aioimg,
  },
  {
    id: 2,
    title: "Computers",
    image: aioimg,
  },
  {
    id: 3,
    title: "Monitor",
    image: aioimg,
  },
  {
    id: 4,
    title: "Laptop",
    image: aioimg,
  },
  {
    id: 5,
    title: "Printers",
    image: aioimg,
  },
  {
    id: 6,
    title: "Server",
    image: aioimg,
  },
];
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

export const accountMenuTitles = [
  {
    title: "My Account Information",
    links: [
      {
        name: "My Profile",
        pathdir: "/account/",
        icon: <CgProfile />,
      },
      {
        name: "My Address",
        pathdir: "/account/address",
        icon: <BsTruck />,
      },
    ],
  },

  {
    title: "My Orders",
    links: [
      {
        name: "Manage Orders",
        pathdir: "/account/orders",
        icon: <BsCartCheck />,
      },
    ],
  },

  {
    title: "Preference",
    links: [
      {
        name: "WishList",
        pathdir: "/account/wishlist",
        icon: <BsHeart />,
      },
    ],
  },
];
export const menu = [
  {
    name: "Login or Register",
    path: "/login",
    icon: <CgProfile />,
  },
  {
    name: "WishList",
    path: "/wishlisht",
    icon: <BsHeart />,
  },
  {
    name: "Contacts Us",
    path: "/contactus",
    icon: <TiContacts />,
  },
  {
    name: "Location",
    path: "/location",
    icon: <MdLocationPin />,
  },
];
export const categiries = [
  {
    title: "Categories",
    catogryNane: [
      {
        name: "Login or Register",
        path: "/login",
      },
      {
        name: "Login or Register",
        path: "/login",
      },
    ],
  },
];

export const brand = [
  {
    title: "Brand",
    brandName: [
      {
        name: "Dell",
        path: "#",
      },
      {
        name: "Hp",
        path: "#",
      },
      {
        name: "Lenovo",
        path: "#",
      },
      {
        name: "Microsfot",
        path: "#",
      },
      {
        name: "Dummy",
        path: "#",
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
