const EventEmmiter = require("events");

class Authentication extends EventEmmiter {}

const auth = new Authentication();

auth.on("signup", (email) => {
  console.log("submit confirmation email to ", email);
})

auth.emit("signup", "alias@mail.com");

auth.removeAllListeners();