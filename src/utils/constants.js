import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Serve consumers through online and physical stores and focus on selection, price, and convenience.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online, and endeavours to offer its customers the lowest possible prices.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We are at service of out customers since 2005, and hope to continue for doing our job for many years to come.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
