import { signTypes } from "@/types/common";
import { createJWT, comparePassword } from "@/utils/jwt";
import { ApolloError } from "apollo-server-errors";
import { driver } from "../index";

export const authMutations = {
  signIn: async (_source: any, { email, password }: signTypes) => {
    const session = driver.session();
    try {
      const result = await session.run(
        `MATCH (u:User {email:"${email}"}) RETURN u`
      );
      const [user]: any = result.records.map(
        (record) => record.get("u").properties
      );
      if (!user) throw new Error("Email or password is not correct!");
      if (user.userType !== "Admin") throw new Error("You are not the admin!");
      const correctPassword = await comparePassword(password, user.password);
      if (!correctPassword)
        throw new Error("Email or password is not correct!");
      const token = await createJWT({ sub: user.id });
      return { user, token };
    } catch (error: any) {
      throw new ApolloError(error.message);
    } finally {
      session.close();
    }
  },
};
