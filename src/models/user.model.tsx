export interface User {
  id: string;
  username: string;
  email: string
  password: string;
}

export type CreateUserDto = Omit<User, "id">;
export type UpdateUserDto = Partial<User>;
