import "./catlinez.css";
import { displayHeader } from "../../components/header/header";
import { createElement } from "../../utils/createElement";
import { getRandomCat, getRandomHeadlineGerman } from "../../utils/api";
import { displayCat } from "../../components/cat/randomcat";
import { displayGermanHeadline } from "../../components/headline/headline";

export default {
  title: "Pages/Catlinez",
  parameters: { layout: "fullscreen" },
};

export const catlinez = (args, { loaded: { cat, headline } }) => {
  return createElement("div", {
    className: "catlinez__container",
    childs: [displayHeader(), displayCat(cat), displayGermanHeadline(headline)],
  });
};

catlinez.loaders = [
  async () => ({
    cat: await getRandomCat(),
    headline: await getRandomHeadlineGerman(),
  }),
];
