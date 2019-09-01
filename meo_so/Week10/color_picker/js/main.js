console.log("run");

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

const hexToHsl = hex => {
  const rgb = hexToRgb(hex);
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return "hsl(" + h + ", " + s + "%, " + l + "%)";
};

// Vue component
const hexColor = new Vue({
  el: "#hex",
  data: {
    color: "#ff0000"
  },
  methods: {
    selectColor() {
      console.log(document.getElementById("selected").value);
      this.color = document.getElementById("selected").value;
      document.getElementById(
        "showHex"
      ).innerHTML = hexColor.color.toUpperCase();

      const rgb = hexToRgb(hexColor.color);

      document.getElementById(
        "showRgb"
      ).innerHTML = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

      document.getElementById("showHsl").innerHTML = hexToHsl(hexColor.color);
    }
  }
});
