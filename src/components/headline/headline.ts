import { createElement } from "../../utils/createElement";

export function displayGermanHeadline({ headline, link }) {
  return createElement("div", {
    className: "headline__container",
    childs: [
      createElement("p", {
        className: "headline",
        innerText: headline,
      }),
      createElement("a", {
        href: link,
        innerText: "Artikel lesen",
        target: "_blank",
      }),
    ],
  });
}
