const userName = document.getElementById("custom-name");
const createBtn = document.querySelector(".generate");
const output = document.querySelector(".story");

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const heroes = [
  "Captain Mango",
  "Ninja Potato",
  "Professor Penguin"
];

const locations = [
  "the moon",
  "an abandoned castle",
  "a giant pizza factory"
];

const actions = [
  "started dancing uncontrollably",
  "exploded into confetti",
  "flew away on a giant chicken"
];

function makeStory() {
  const hero = pickRandom(heroes);
  const place = pickRandom(locations);
  const action = pickRandom(actions);

  return `It was 40 Celsius outside when ${hero} visited ${place}. Suddenly, they ${action}. Alex watched everything happen and couldn't stop laughing. Everyone knew ${hero} weighed 200 kilograms and loved adventures.`;
}

createBtn.addEventListener("click", generateNewStory);

function generateNewStory() {
  let text = makeStory();

  if (userName.value !== "") {
    text = text.replace("Alex", userName.value);
  }

  if (document.getElementById("uk").checked) {
    text = text.replace("200 kilograms", "31 stone");
    text = text.replace("40 Celsius", "104 Fahrenheit");
  }

  output.textContent = text;
  output.style.visibility = "visible";
}
