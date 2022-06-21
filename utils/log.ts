import * as log from "https://deno.land/std@0.143.0/log/mod.ts";

await log.setup({
  handlers: {
    stringFmt: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["stringFmt"],
    },
  },
});

export default log;
