import "./headline.css";
import { displayGermanHeadline } from "./headline";
import { createElement } from "../../utils/createElement";
import { getRandomHeadlineGerman } from "../../utils/api";

export default {
  title: "Components/Headline",
  parameters: { layout: "centered" },
};

export const HeadlineFromAPI = (args, { loaded: { headline } }) => {
  return displayGermanHeadline(headline);
};

HeadlineFromAPI.loaders = [
  async () => ({
    headline: await getRandomHeadlineGerman(),
  }),
];
