const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  function firstNamePrinter(collection) {
    for (const user of collection) {
      console.log(user.firstName);
    }
  }
  
  firstNamePrinter(users);
  // LOG: Niky
  // LOG: Tracy
  // LOG: Josh
  // LOG: Kate
  // LOG: Avidor
  // LOG: Drew

  function blueFilter(collection) {
    for (const user of collection) {
      if (user.favoriteColor === "Blue") {
        console.log(user.firstName);
      }
    }
  }
  
  blueFilter(users);
  // LOG: Niky
  // LOG: Josh
  // LOG: Avidor

  function colorFilter(collection, color) {
    for (const user of collection) {
      if (user.favoriteColor === color) {
        console.log(user.firstName);
      }
    }
  }
  
  colorFilter(users, "Red");
  // LOG: Kate

  function filter(collection, attribute, value) {
    for (const user of collection) {
      if (user[attribute] === value) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, "favoriteAnimal", "Jaguar");
  // LOG: Niky
  // LOG: Kate

  function filter(collection, attribute1, value1, attribute2, value2) {
    for (const user of collection) {
      if (user[attribute1] === value1 && user[attribute2] === value2) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, "favoriteAnimal", "Jaguar", "favoriteColor", "Blue");
  // LOG: Niky

  function filter(collection) {
    for (const user of collection) {
      if (likesElephants(user)) {
        console.log(user.firstName);
      }
    }
  }
  
  function likesElephants(user) {
    return user["favoriteAnimal"] === "Elephant";
  }
  
  filter(users);
  // LOG: Drew

  const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];
  
  function filter(collection, cb) {
    for (const user of collection) {
      if (cb(user)) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });
  // LOG: Josh
  // LOG: Avidor
  
  filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });
  // LOG: Tracy
  // LOG: Drew


  function randomMultiplyAndFloor() {
    return Math.floor(Math.random() * 100);
  }
  
  randomMultiplyAndFloor();
  // => 53
  randomMultiplyAndFloor();
  // => 66

  const ada = {
    name: "Ada Lovelace",
    age: 202,
  };
  
  function happyBirthday(person) {
    console.log(
      `Happy birthday, ${person.name}! You're ${++person.age} years old!`
    );
  }
  
  happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
  happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 204 years old!
  
  ada;
  // => {name: "Ada Lovelace", age: 204}


  function multiplyAndFloor(num) {
    return Math.floor(num * 100);
  }
  
  const randNum = Math.random();
  
  randNum;
  // => 0.9123939589869237
  
  multiplyAndFloor(randNum);
  // => 91
  multiplyAndFloor(randNum);
  // => 91

  const adaAge202 = {
    name: "Ada Lovelace",
    age: 202,
  };
  
  function happyBirthday(person) {
    const newPerson = Object.assign({}, person, { age: person.age + 1 });
  
    console.log(
      `Happy birthday, ${newPerson.name}! You're ${newPerson.age} years old!`
    );
  
    return newPerson;
  }
  
  const adaAge203 = happyBirthday(adaAge202);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
  adaAge202;
  // => {name: "Ada Lovelace", age: 202}
  
  adaAge203;
  // => {name: "Ada Lovelace", age: 203}

  const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];
  
  function filter(collection, cb) {
    const newCollection = [];
  
    for (const user of collection) {
      if (cb(user)) {
        newCollection.push(user);
      }
    }
  
    return newCollection;
  }
  
  const bluePenguinUsers = filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });
  
  bluePenguinUsers;
  // => [{ firstName: "Josh", lastName: "Rowley", favoriteColor: "Blue", favoriteAnimal: "Penguin" }, { firstName: "Avidor", lastName: "Turkewitz", favoriteColor: "Blue", favoriteAnimal: "Penguin" }]
  
  const yellowUsers = filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });
  
  yellowUsers;
  // => [{ firstName: "Tracy", lastName: "Lum", favoriteColor: "Yellow", favoriteAnimal: "Penguin" }, { firstName: "Drew", lastName: "Price", favoriteColor: "Yellow", favoriteAnimal: "Elephant" }]
  
  users.length;
  // => 6