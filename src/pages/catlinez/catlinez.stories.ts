import "./catlinez.css";
import { displayHeader } from "../../components/header/header";
import { createElement } from "../../utils/createElement";
import {
  getRandomCat,
  getRandomHeadlineGerman,
  randomNumber,
} from "../../utils/api";
import { displayCat } from "../../components/cat/randomcat";
import { displayGermanHeadline } from "../../components/headline/headline";

export default {
  title: "Pages/Catlinez",
  parameters: { layout: "fullscreen" },
};

export const catlinez = (args, { loaded: { cat, headline } }) => {
  const catElement = displayCat(cat);
  const headlineElement = displayGermanHeadline(headline);

  const randomButton = createElement("button", {
    className: "randomButton",
    innerText: "Refresh",
    onclick: async () => {
      const cat = await getRandomCat();
      const headline = await getRandomHeadlineGerman();
      const catElement = displayCat(cat);
      const headlineElement = displayGermanHeadline(headline);
      buildCatlinez.replaceChild(catElement, buildCatlinez.childNodes[1]);
      buildCatlinez.replaceChild(headlineElement, buildCatlinez.childNodes[2]);
    },
  });

  const buildCatlinez = createElement("div", {
    className: "catlinez__container",
    childs: [displayHeader(), catElement, headlineElement, randomButton],
  });

  return buildCatlinez;
};

catlinez.loaders = [
  async () => ({
    cat: await getRandomCat(),
    headline: await getRandomHeadlineGerman(),
  }),
];
