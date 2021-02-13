import { createElement } from "../../utils/createElement";

export function displayCat({ url }) {
  return createElement("img", {
    className: "catImg",
    src: url,
    alt: "cat",
  });
}
