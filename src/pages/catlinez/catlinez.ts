import { displayHeader } from "../../components/header/header";
import { createElement } from "../../utils/createElement";
import { getRandomCat } from "../../utils/api";
import { displayCat } from "../../components/cat/randomcat";

export function buildCatlinez() {
  return createElement("div", {
    className: "app__container",
    childs: [displayHeader()],
  });
}
