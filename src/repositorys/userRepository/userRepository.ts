import { eq } from "drizzle-orm";
import { db } from "../../database/config";
import { user as userSchema } from "../../database/schemas/user_schema";
import { IUser } from "./types";

const userRepository = () => {
  const createUser = async (user: IUser) => {
    try {
      const insertUser = db.insert(userSchema).values(user).execute();
      console.log(insertUser, "User created");
    } catch (error) {
      console.log(error, "Error to create user");
    }
  };
  const getUser = async (): Promise<IUser> => {
    const [user] = await db.select().from(userSchema).execute();
    return user;
  };
  const updateUser = async (user: Partial<IUser>) => {
    try {
      await db.update(userSchema).set(user).execute();
    } catch (error) {
      console.log(error, "Error to update user");
    }
  };

  return {
    createUser,
    getUser,
    updateUser,
  };
};

export { userRepository };
