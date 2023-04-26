function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
  this.getAge = function () {
    console.log(2023 - this.birthYear);
  };
}

Person.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

const person1 = new Person("Karolis", 1990);
/* console.log(person1);
person1.introduce(); */

// ES6
class UpdatedPerson {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.getAge = function () {
      console.log(2023 - this.birthYear);
    };
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person2 = new UpdatedPerson("Jonas", 1986);
/* console.log(person2);
person2.introduce();
person2.getAge(); */

/* const fetchRestaurants = async () => {
  try {
    const response = await fetch("./exercises/json-tasks/foods.json");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

fetchRestaurants(); */

//

const userID = "lukas323";

const baseUrl = `https://quark-scandalous-beast.glitch.me/${userID}/todos`;

const fetchTodos = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const postTodo = async requestBody => {
  try {
    await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
  } catch (err) {
    console.error(err);
  }
};

// postTodo({ description: "Good morning", title: "The other title" });

// fetchTodos();

// Array methods;

const friends = [
  {
    name: "Ona",
    age: 23,
    favColor: "red",
    pets: ["cat", "horse"],
    hairType: "wavy"
  },
  {
    name: "Petras",
    age: 17,
    favColor: "green",
    pets: ["dog"],
    hairType: "straight"
  },
  {
    name: "Klemensas",
    age: 28,
    favColor: "black",
    pets: ["horse", "cat", "dog", "rat"],
    hairType: "shaved"
  },
  {
    name: "Leokadija",
    age: 30,
    favColor: "violet",
    pets: [],
    hairType: "straight"
  },
  {
    name: "Arvydas",
    age: 14,
    favColor: "green",
    pets: ["cat", "goldfish"],
    hairType: "curly"
  },
  {
    name: "Elena",
    age: 18,
    favColor: "blue",
    pets: [],
    hairType: "straight"
  },
  {
    name: "Gytis",
    age: 34,
    favColor: "green",
    pets: ["dog", "cat", "rat"],
    hairType: "curly"
  }
];

const minors = friends.filter(item => item.age < 18);
console.log(minors);

const names = friends.map(friend => {
  return {
    whatever: friend.name,
    age: friend.age,
    birthYear: 2023 - friend.age
  };
});

const firstGreen = friends.find(friend => friend.favColor === "green");

const withPets = friends.filter(friend => friend.pets.length > 2);
