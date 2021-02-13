import "./header.css";
import { displayHeader } from "./header";
import { createElement } from "../../utils/createElement";

export default {
  title: "Components/Header",
  parameters: { layout: "centered" },
};

export const header = () => displayHeader();
