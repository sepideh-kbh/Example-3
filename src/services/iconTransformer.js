import {
  faGlobe,
  faCog,
  faHistory,
  faChartBar,
  faChevronDown,
  faArrowCircleDown,
  faExchangeAlt,
  faExpandAlt
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  "globe": faGlobe,
  "cog": faCog,
  "history": faHistory,
  "chart-bar": faChartBar,
  "chevron-down": faChevronDown,
  "arrow-circle-down": faArrowCircleDown,
  "exchange-alt": faExchangeAlt,
  "expand-alt": faExpandAlt,
};

const iconTransformer = (type) => {
  return type && icons[type] ? icons[type] : icons["default"];
};

export default iconTransformer;
