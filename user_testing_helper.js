exports.GetUserParameters = function () {
  return {
    username: "testUsername",
    firstName: "Michael",
    lastName: "Harmon ",
    email: "example@example.com",
    home: "some coordinates",
    gender: "male",
    language: "en",
    mpg: 20,
    isPremium: false,
    birthday: "05-12-1998",
    country: "US",
    timezone: "MST",
  }
};

exports.GetUpdateUserParameters = function () {
  return {
    username: "newTestUsername",
    firstName: "newMichael",
    lastName: "newHarmon",
    email: "newObey3213@outlook.com",
    home: "hyde park",
    gender: "female",
    language: "es",
    mpg: 30,
    isPremium: true,
    birthday: "05-20-1997",
    country: "DR",
    timezone: "PST",
  }
};


exports.GetNullUserParameters = function () {
  return {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    gender: null,
    language: null,
    mpg: null,
    isPremium: null,
    birthday: null,
    country: null,
    timezone: null,
  }
};
