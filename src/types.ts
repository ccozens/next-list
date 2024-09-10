export type Task = {
  text: string;
  done: boolean;
  id: number;
};

export type Todo = {
  heading: string;
  tasks: Task[];
};
export interface TaskWithID extends Task {
  todo_id: number;
}

export type Heading = {
  id: number;
  heading: string;
};

export type Filters = "all" | "active" | "completed";
