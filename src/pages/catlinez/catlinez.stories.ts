import "./catlinez.css";
import { displayHeader } from "../../components/header/header";
import { createElement } from "../../utils/createElement";
import {
  getRandomCat,
  getRandomHeadlineEnglish,
  getRandomHeadlineGerman,
} from "../../utils/api";
import { displayCat } from "../../components/cat/randomcat";
import {
  displayGermanHeadline,
  displayEnglishHeadline,
} from "../../components/headline/headline";

export default {
  title: "Pages/Catlinez",
  parameters: { layout: "fullscreen" },
};

export const catlinez = (args, { loaded: { cat, headline } }) => {
  const catElement = displayCat(cat);
  const headlineElement = displayGermanHeadline(headline);

  const randomButtonGer = createElement("button", {
    className: "randomButtonGer",
    innerText: "German Catline",
    onclick: async () => {
      const cat = await getRandomCat();
      const headline = await getRandomHeadlineGerman();
      const catElement = displayCat(cat);
      const headlineElement = displayGermanHeadline(headline);
      buildCatlinez.replaceChild(catElement, buildCatlinez.childNodes[1]);
      buildCatlinez.replaceChild(headlineElement, buildCatlinez.childNodes[2]);
    },
  });
  const randomButtonEng = createElement("button", {
    className: "randomButtonEng",
    innerText: "English Catline",
    onclick: async () => {
      const cat = await getRandomCat();
      const headline = await getRandomHeadlineEnglish();
      const catElement = displayCat(cat);
      const headlineElement = displayEnglishHeadline(headline);
      buildCatlinez.replaceChild(catElement, buildCatlinez.childNodes[1]);
      buildCatlinez.replaceChild(headlineElement, buildCatlinez.childNodes[2]);
    },
  });

  const buttons = createElement("div", {
    className: "button__container",
    childs: [randomButtonGer, randomButtonEng],
  });

  const buildCatlinez = createElement("div", {
    className: "catlinez__container",
    childs: [displayHeader(), catElement, headlineElement, buttons],
  });

  return buildCatlinez;
};

catlinez.loaders = [
  async () => ({
    cat: await getRandomCat(),
    headline: await getRandomHeadlineGerman(),
  }),
];
