
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  { id: 3, name: "Doe John", email: "doe.john@example.com" },
];

app.get("/users", (req, res) => {
  res.send({ success: true, data: users });
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({ success: true, data: newUser });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
