import React from "react";
import { FiHome } from "react-icons/fi";
import {
    FaRegChartBar,
    FaCoins,
    FaRegBell,
    FaCog,
    FaRegQuestionCircle,
} from "react-icons/fa";
import { LuWallet, LuMoreVertical } from "react-icons/lu";

export const links = [
    {
        title: "Home",
        path: "/",
        icon: <FiHome />,
        cName: "link",
    },
    {
        title: "Population",
        path: "/population",
        icon: <FaRegChartBar />,
        cName: "link",
    },
    {
        title: "Crypto",
        path: "/crypto",
        icon: <FaCoins />,
        cName: "link",
    },
    {
        title: "Wallet",
        path: "/wallet",
        icon: <LuWallet />,
        cName: "link",
    },
];

export const options = [
    {
        icon: <FaRegBell />,
        text: "Notifications",
    },
    {
        icon: <FaRegQuestionCircle />,
        text: "Support",
    },
    {
        icon: <FaCog />,
        text: "Settings",
    },
];

export const userProfile = {
    avatarSrc: "https://avatar.iran.liara.run/public/41",
    name: "Akshay Rajput",
    email: "akshaymrajput@gmail.com",
    settingIcon: <LuMoreVertical />,
};
