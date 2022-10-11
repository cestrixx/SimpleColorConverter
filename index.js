// run `node index.js` in the terminal
const simpleColorConverter = require('simple-color-converter');

console.log(`Hello Node.js v${process.versions.node}!`);

const colorTranslator = (value) => {
  var color = new simpleColorConverter(value);
  return color;
};

// faster
console.log(
  'Faster: ',
  colorTranslator({
    rgb: { r: 10, g: 200, b: 50 },
    to: 'cmyk',
  })
);

// slower but more convenient
console.log(
  'Slower: ',
  colorTranslator({
    color: 'rgb 10 200 50',
    to: 'cmyk',
  })
);

console.log(
  'HEX6(#) => RGB: ',
  colorTranslator({
    color: '#99EE99',
    to: 'rgb',
  })
);

console.log(
  'HEX6(0x) => RGB: ',
  colorTranslator({
    color: '0x99EE99',
    to: 'rgb',
  })
);

console.log(
  'HEX8 => RGBA: ',
  colorTranslator({
    color: '99EE9980',
    to: 'rgba',
  })
);

console.log(
  'Cor => RGBA: ',
  colorTranslator({
    color: 'red',
    to: 'rgba',
  })
);
