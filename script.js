const user = {
  name: "okazaki",
  age: 19,
  uid: "hdja-8ner-4289-wdss",
};

Object.keys(user).forEach((key) => {
  localStorage.setItem(key, user[key]);
  console.log(key + " : " + user[key]);
  console.log("=================");
});

console.log(localStorage.getItem("age"));
