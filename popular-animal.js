function findPopularAnimal(animals = "", forbidden = []) {
  const animalArr = animals.toLowerCase().split(" ");

  const frequency = {};

  for (const animal of animalArr) {
    if (forbidden.includes(animal)) {
      continue;
    }
    if (frequency[animal]) {
      frequency[animal]++;
    } else {
      frequency[animal] = 1;
    }
  }

  let popularAnimal;
  let maxFrequency = 0;

  for (const animal in frequency) {
    if (frequency[animal] > maxFrequency) {
      maxFrequency = frequency[animal];
      popularAnimal = animal;
    }
  }

  return popularAnimal;
}

const a = "DoG horse caT donkey bird doNKey cAt sheEp cat ";
const s = ["donkey"];
console.log(findPopularAnimal(a, s));
