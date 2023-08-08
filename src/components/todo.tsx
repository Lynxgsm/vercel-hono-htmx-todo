import { TTodo } from "../types/todo";

const Todo = ({ id, title }: TTodo) => (
  <div
    hx-delete={`/todo/${id}`}
    hx-swap="outerHTML"
    class="flex row items-center justify-between py-1 px-4 my-1 rounded-lg text-lg border bg-gray-100 text-gray-600 mb-2"
  >
    <span>{title}</span>
    <div class="flex items-center gap-2">
      <input type="checkbox" checked />
      <button class="font-medium">Delete</button>
    </div>
  </div>
);

export default Todo;
