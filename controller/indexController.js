//summation function
//parameters: number1, number2
//result: number

exports.sum = (number1, number2) => {
  return parseInt(number1) + parseInt(number2);
};

let person = {
  name: "anton",
  age: 100,
  country: "pandora"
};

exports.getMyData = () => {
  return person; // object
};

exports.getString = () => {
  return "I am a String"; //string
};

exports.getNull = () => {
  return null;
};
