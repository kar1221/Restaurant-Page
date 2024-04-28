import { menuData } from "./functions/type";
import frenchVanilla from "../assets/vanilla-french-latte.png";
import MatchaLatte from "../assets/matcha-latte.jpg";
import Capuccinno from "../assets/cappuccino.jpg";
import CaramelMachiatos from "../assets/caramel-machiatos.jpg";

export const data: menuData[] = [
  {
    imgSrc: frenchVanilla,
    title: "French Vanilla Latte",
    description:
      "Experience the creamy elegance of our French Vanilla Latte: espresso and steamed milk meet the sweet allure of vanilla, topped with frothy goodness. Pure indulgence in every sip!",
  },
  {
    imgSrc: MatchaLatte,
    title: "Matcha Latte",
    description:
      "Savor the refreshing zest of our Matcha Latte: premium matcha green tea meets creamy steamed milk for a vibrant, energizing treat. Pure bliss in every sip!",
  },
  {
    imgSrc: Capuccinno,
    title: "Cappuccino",
    description:
      "Indulge in the timeless perfection of our Cappuccino: bold espresso topped with a velvety layer of frothed milk, creating a rich, satisfying experience in every sip. Classic comfort in a cup!",
  },
  {
    imgSrc: CaramelMachiatos,
    title: "Caramel Machiatos",
    description:
      "Discover bliss in every sip with our Caramel Macchiato: a harmonious blend of rich espresso, velvety steamed milk, and a decadent swirl of caramel. This indulgent treat is sure to delight your senses with its perfect balance of sweetness and bold coffee flavor. Experience a moment of pure luxury with each sip of our Caramel Macchiato.",
  },
];

export default data;
