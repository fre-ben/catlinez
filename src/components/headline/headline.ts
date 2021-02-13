import { createElement } from "../../utils/createElement";

export function displayHeadline({ headline }) {
  return createElement("p", {
    className: "headline",
    innerText: headline,
  });
}
