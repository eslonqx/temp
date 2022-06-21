import { Context, } from "https://deno.land/x/oak@v10.6.0/mod.ts";

type NextFunction = () =>  Promise<unknown>;

const test = async (_ctx: Context, next: NextFunction) => {
    console.log("Hello World");
    await next();
}

export default test;