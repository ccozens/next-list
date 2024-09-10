// `app/page.tsx`

// import s
import { Todo } from "@/types";
export default async function Page() {
  // // Fetch data from the API route
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
  const data = await res.json();


  // // Access the todos from the fetched data
  const { todos } = data;

  return (
    <main>
      <h1>Todo List</h1>
      {todos.map((todo: Todo) => (
        <div key={todo.heading}>
          <h2>{todo.heading}</h2>
          <ul>
            {todo.tasks.map((task) => (
              <li key={task.id}>
                {task.text} - {task.done ? "Done" : "Pending"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
