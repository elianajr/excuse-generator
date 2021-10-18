

window.onload = () => {

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};


let generateExcuse = () => {

  let pronoun = ['A', 'The'];
  let subject = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pincone'];
  let action = ['took my', 'threw my', 'yelled at my', 'stoled my', 'bit my'];
  let possesion = ['homework', 'toe', 'car', 'shoe'];
  let where = ['on the street', 'in my house', 'in my driveway'];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);;
  let actionIndex = Math.floor(Math.random() * action.length);;
  let possesionIndex = Math.floor(Math.random() * possesion.length);;
  let whereIndex = Math.floor(Math.random() * where.length);;

  return pronoun[proIndex] + ' ' + subject[subjIndex] + ' ' + action[actionIndex] + ' ' + possesion[possesionIndex] + ' ' + where[whereIndex];
};
