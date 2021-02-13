import "./headline.css";
import { displayHeadline } from "./headline";
import { createElement } from "../../utils/createElement";
import { getRandomHeadlineGerman } from "../../utils/api";

export default {
  title: "Components/Headline",
  parameters: { layout: "centered" },
};

export const HeadlineFromAPI = (args, { loaded: { headline } }) => {
  return displayHeadline(headline);
};

HeadlineFromAPI.loaders = [
  async () => ({
    headline: await getRandomHeadlineGerman(),
  }),
];
