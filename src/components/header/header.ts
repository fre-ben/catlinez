import { createElement } from "../../utils/createElement";

export function displayHeader() {
  return createElement("h1", {
    className: "header",
    innerHTML: `CATLINEZ <i class="fas fa-paw"></i> <i class="far fa-newspaper"></i>`,
  });
}
