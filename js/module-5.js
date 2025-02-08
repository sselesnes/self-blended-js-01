// init
function alert(args) {
  console.log(`%c${args}`, "color: yellow;");
}
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

alert(`for ... of => Colors1`);
const hexColors1 = [];
const rgbColors1 = [];

for (const color of colors) {
  console.log(color.hex, color.rgb);
  if ("hex" in color) hexColors1.push(color.hex);
  if ("rgb" in color) rgbColors1.push(color.rgb);
}

//
alert(`for ... in => Colors2`);
const hexColors2 = [];
const rgbColors2 = [];

for (const color in colors) {
  console.log(color, colors[color].hex, colors[color].rgb);
  if ("hex" in colors[color]) hexColors2.push(colors[color].hex);
  if ("rgb" in colors[color]) rgbColors2.push(colors[color].rgb);
}
alert(`Colors1 == Colors2`);
console.log();

// parsed = JSON.parse(JSON.stringify(color));
