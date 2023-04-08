const express = require("express");


const todo = require("./todo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todolist", (req, res) => {
  res.json(todo);
});

app.post("/todolist", (req, res) => {
  todo.push(req.body);
  let json = req.body;
  res.send(`Add new todo '${json.title}' completed.`);
});

app.put("/todolist/:id", (req, res) => {
  const updateIndex = todo.findIndex(
    (todo) => todo.id === Number(req.params.id)
  );
  todo[updateIndex].title = req.body.title;

  res.send(`Update todo item id: '${todo[updateIndex].id}' completed.`);
});

app.delete("/todolist/:id", (req, res) => {
  const deletedIndex = todo.findIndex(
    (todo) => todo.id === Number(req.params.id)
  );
  todo.splice(deletedIndex, 1);
  res.send(`Delete todo item completed.`);
});

app.listen(3000, () => console.log("API Server is running..."));
