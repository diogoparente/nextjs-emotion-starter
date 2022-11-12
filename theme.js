const breakpoints = {
  sm: "400px",
  m: "767px",
  lg: "1024px",
};

const darkBase = {
  c1: "#131415",
  c2: "#4c5270",
  c3: "#5f5fff",
  c4: "#f2f1e8",
};

const darkDarken = {
  "c1-d": "#080808",
  "c2-d": "#1e212d",
  "c3-d": "#00008c",
  "c4-d": "#797444",
};

const darkLighten = {
  "c1-l": "#9ca1a6",
  "c2-l": "#b2b6cb",
  "c3-l": "#bfbfff",
  "c4-l": "#faf9f6",
};

const lightBase = {
  c1: "#fafaf7",
  c2: "#feb0a8",
  c3: "#92a9da",
  c4: "#36454f",
};

const lightDarken = {
  "c1-d": "#7a7a4c",
  "c2-d": "#a71102",
  "c3-d": "#253c6d",
  "c4-d": "#161c20",
};

const lightLighten = {
  "c1-l": "#fdfdfc",
  "c2-l": "#ffdfdc",
  "c3-l": "#d3ddf0",
  "c4-l": "#a5b6c2",
};

const dark = { ...darkBase, ...darkDarken, ...darkLighten };
const light = { ...lightBase, ...lightDarken, ...lightLighten };

module.exports = { dark, light, breakpoints };
