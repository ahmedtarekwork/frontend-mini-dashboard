import type { store } from "../store/store";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type User = Record<"name" | "username" | "email" | "phone", string> & {
  id: number;

  address: Record<"street" | "suite" | "city" | "zipcode", string> & {
    geo: Record<"lat" | "lng", string>;
  };
  website: string;
  company: Record<"name" | "catchPhrase" | "bs", string>;
};

export type RootStateType = ReturnType<typeof store.getState>;
