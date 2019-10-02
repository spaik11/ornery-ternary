function isHot(temperature) {
  return temperature >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.';
}


function helloThere(name) {
  return name.length < 6 ? 'Hello, Colin' : 'Hi, Mesuara';
}


function goodbyeYou(name) {
  return name === undefined ? 'Goodbye, stranger' : `Goodbye, ${name}`;
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}