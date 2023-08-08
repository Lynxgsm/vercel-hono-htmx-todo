import { Hono } from "hono/quick";
import Layout from "./layouts/main";
import { logger } from "hono/logger";
import Todo from "./components/todo";
import { TTodo } from "./types/todo";
import AddTodo from "./components/add";
import { uid } from "uid";

const app = new Hono();
const todos: TTodo[] = [];

app.use("*", logger());
app.get("/todos", (c) => c.json(todos));

app.post("/todo", async (c) => {
  const id = uid();
  const body = await c.req.formData();

  if (body) {
    let title = "";
    body.forEach((value: string) => {
      title = value;
    });

    todos.push({ id, title });
    return c.html(<Todo title={title} id={id} />);
  }

  return null;
});

app.delete("/todo/");

app.get("/", (c) =>
  c.html(
    <Layout>
      <AddTodo />
      {todos.map((todo) => {
        return <Todo title={todo.title} id={todo.id} />;
      })}
      <div id="todo"></div>
    </Layout>
  )
);

export default app;
