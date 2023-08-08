const fetchTodos = async () => {
  const todos = await fetch("/todos");
  const response = await todos.json();
  console.log(response);
};

fetchTodos();
