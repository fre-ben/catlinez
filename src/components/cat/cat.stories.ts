import "./cat.css";
import { displayCat } from "./randomcat";
import { createElement } from "../../utils/createElement";
import { getRandomCat } from "../../utils/api";

export default {
  title: "Components/Hello Cat",
  parameters: { layout: "centered" },
};

//Get Random Cat Gif from API
export const CatFromAPI = (args, { loaded: { cat } }) => {
  return displayCat(cat);
};

CatFromAPI.loaders = [
  async () => ({
    cat: await getRandomCat(),
  }),
];
