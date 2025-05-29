export type Filter = "all" | "active" | "completed";

export type Status = Exclude<Filter, "all">;

export type Task = {
  id: number;
  text: string;
  status: Status;
};
