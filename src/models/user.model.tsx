export interface User {
  uuid: string;
  username: string;
  email: string
  password: string;
}

export type CreateUserDto = Omit<User, "uuid">;
export type UpdateUserDto = Partial<User>;
