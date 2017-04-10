let browsers = ['Chrome', 'Firefox', 'Edge', 'Safary', 'Opera'];

for (let index in browsers) {
  console.log(index);
}

for (let index in browsers) {
  console.log(browsers[index]);
}

console.log(browsers);

for (let value of browsers) {
  console.log(value);
}
