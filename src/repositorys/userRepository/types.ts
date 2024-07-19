export interface IUser {
  id: string;
  gender: "male" | "female" | string;
  weight: number;
  height: number;
  age: number;
  goal: number;
  wake_up_time: string;
  sleep_time: string;
}
