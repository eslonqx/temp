import {
  Application,
  Router,
  isHttpError,
  Status,
} from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { PORT } from "./config.ts";
import log from "./utils/log.ts";
import accountRoutes from "./routes/account.ts";

const app = new Application();

const controller = new AbortController();
const { signal } = controller;

// Routes
const router = new Router();

router.use("/account", accountRoutes.routes(), accountRoutes.allowedMethods());

app.use(router.routes());

// Error handling
app.use(async (_ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          // Handle NotFound
          break;
        default:
        // Handle other statuses
      }
    } else {
      // Rethrow if you can't handle the error
      throw err;
    }
  }
});

app.addEventListener("listen", ({ port }) => {
  log.info(`Server is running on port ${port}`);
});

app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  log.error(evt.error);
});

const listenPromise = app.listen({ port: parseInt(PORT) || 5000, signal });

// Graceful shutdown
Deno.addSignalListener("SIGQUIT", () =>
  // In order to close the server...
  controller.abort()
);

await listenPromise;
