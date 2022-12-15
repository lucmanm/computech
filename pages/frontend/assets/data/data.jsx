import {
  BsPerson,
  BsHeart,
  BsCart2,
  BsLaptop,
  BsPrinter,
  BsCartCheck,
  BsTruck
} from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiDesktop } from "react-icons/ci"
import { CgProfile } from "react-icons/cg"

export const icons = {
  personIcon: <BsPerson className="h-7 w-7" />,
  heartIcon: <BsHeart className="h-7 w-7" />,
  cartIcon: <BsCart2 className="h-6 w-6" />,
  languageIcon: <IoLanguage className="h-7 w-7" />,
  emailIcon: <HiOutlineMailOpen className="h-12 w-12" />,
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
        pathdir: "profile",
        icon: <CgProfile />,
      },
      {
        name: "My Address",
        pathdir: "address",
        icon: <BsTruck />,
      },
    ],
  },

  {
    title: "My Orders",
    links: [
      {
        name: "Manage Orders",
        pathdir: "orders",
        icon: <BsCartCheck />,
      },
    ],
  },

  {
    title: "Preference",
    links: [
      {
        name: "WishList",
        pathdir: "wishlist",
        icon: <BsHeart />,
      },
    ],
  },
]
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
