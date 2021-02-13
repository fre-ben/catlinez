import "./cat.css";
import { helloCat } from "./randomcat";
import { createElement } from "../../utils/createElement";

export default {
  title: "Components/Hello Cat",
  parameters: { layout: "centered" },
};

export const helloucat = () => helloCat;
