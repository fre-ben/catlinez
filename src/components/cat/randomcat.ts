import { createElement } from "../../utils/createElement";

export function displayCat({ imgSrc }) {
  return createElement("img", {
    className: "catImg",
    src: imgSrc,
    alt: "cat",
  });
}
