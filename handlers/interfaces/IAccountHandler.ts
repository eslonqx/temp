import { Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";

interface IAccountHandler {
  me(ctx: Context): Promise<void>;
  login(ctx: Context): Promise<void>;
}

export default IAccountHandler;
