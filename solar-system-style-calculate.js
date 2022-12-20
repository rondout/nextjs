const { writeFile } = require("fs/promises");
const { resolve } = require("path");

function calculator({ size, index, key, color, duration }) {
  const w = (h = 300);
  const orbitPosition = 240 - index * 30;
  const orbitSize = 120 + index * 60;

  const originX = orbitSize / 2 + size / 2;
  const originY = size;

  return `.${key}Orbit {
    top: ${orbitPosition}px;
    left: ${orbitPosition}px;
    width: ${orbitSize}px;
    height: ${orbitSize}px;
  }
  .${key} {
    background-color: ${color};
    height: ${size}px;
    width: ${size}px;
    top: ${w - size}px;
    left: ${w - orbitSize / 2 - size / 2}px;
    animation-duration: ${duration}s;
    transform-origin: ${originX}px ${originY}px;
  }
  .${key}Text {
    animation-duration: ${duration}s;
  }`;
}

const items = [
  { size: 10, index: 0, key: "mercury", color: "#a68a38", duration: 1.5 },
  { size: 22, index: 1, key: "venus", color: "#f69d61", duration: 3.84 },
  { size: 18, index: 2, key: "earth", color: "skyblue", duration: 6.25 },
  {
    size: 15,
    index: 3,
    key: "mars",
    color: "rgb(140,119,63)",
    duration: 11.75,
  },
  {
    size: 42,
    index: 4,
    key: "jupiter",
    color: "rgb(156,164,143)",
    duration: 74.04,
  },
  {
    size: 26,
    index: 5,
    key: "saturn",
    color: "rgb(215,171,68)",
    duration: 183.92,
  },
  {
    size: 27,
    index: 6,
    key: "tianwang",
    color: "rgb(164,192,206)",
    duration: 524.46,
  },
  {
    size: 20,
    index: 7,
    key: "haiwang",
    color: "rgb(133,136,180)",
    duration: 1028.76,
  },
];

const cssText = items.map((v) => calculator(v)).join("\n");

writeFile(resolve(__dirname, "./solar-system.css"), cssText);
