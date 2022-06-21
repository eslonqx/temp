import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import test from "../middlewares/test.ts";
import accountHandler from "../handlers/account/index.ts";

const router = new Router();

router.get("/me", test, accountHandler.me);
router.get("/login", accountHandler.login);

export default router;
