import { User } from "../../models";
export interface authState {
  user: User,
  token: string
}
