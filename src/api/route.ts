// imports
import { Heading, TaskWithID, Todo } from "@/types";
import { Database } from "@sqlitecloud/drivers";

// revalidate using ISR
export const revalidate = 60;

// set database to use
const database = new Database(process.env.SQLITECLOUD_CONNECTION_STRING);
const setDatabase = async () => {
  await database.sql`USE DATABASE svelte_lists.sqlite`;
};

await setDatabase();

// fetch data
export async function GET() {
  // get data
  const headings: Heading[] = await database.sql`SELECT * FROM headings`;
  const tasks: TaskWithID[] =
    await database.sql`SELECT todo_id, id, text, done FROM tasks`;

  // join headings and tasks
  const todos: Todo[] = headings.map((heading) => {
    return {
      heading: heading.heading,
      tasks: tasks
        .filter((task) => task.todo_id === heading.id)
        .map((task) => ({
          id: task.id,
          text: task.text,
          done: task.done,
        })),
    };
  });

  return {
    todos,
  };
}
