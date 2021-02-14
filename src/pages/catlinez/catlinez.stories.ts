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
  const test = displayCat(cat);

  const randomButton = createElement("button", {
    className: "randomButton",
    innerText: "Refresh",
    onclick: async () => {
      // location.reload();
      // buildCatlinez.replaceChild(test, buildCatlinez.childNodes[1]);
    },
  });

  const buildCatlinez = createElement("div", {
    className: "catlinez__container",
    childs: [
      displayHeader(),
      test,
      displayGermanHeadline(headline),
      randomButton,
    ],
  });

  return buildCatlinez;
};

catlinez.loaders = [
  async () => ({
    cat: await getRandomCat(),
    headline: await getRandomHeadlineGerman(),
  }),
];
