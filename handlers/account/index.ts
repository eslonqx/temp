import { Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import IAccountHandler from "../interfaces/IAccountHandler.ts";
import IUser from "../../entities/IUser.ts";
import User from "../../models/User.ts";
import log from "../../utils/log.ts";

class AccountHandler implements IAccountHandler {
  async me(ctx: Context) {}

  async login(ctx: Context) {
    try {
      // const users = User.find();
      const insertIds = await User.insertOne(<IUser>{
        id: "1",
        username: "user1",
        password: "password1",
      });
      console.log(insertIds);
      ctx.response.body = "Hello world";
    } catch (err) {
      log.error("Login handler failed");
      log.debug(err);
    }
  }
}

export default new AccountHandler();
