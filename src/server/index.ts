import express from "express";
import { validateRequestParams } from "zod-express-middleware";
import { z } from "zod";

import { PICS } from "../lib/pic.js";
import { dataProvider } from "./dataMiddleware.js";

const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5173;

export const app = express();

app.use("/data*", dataProvider);

app.get("/data", async (_, res) => {
  res.json(res.locals.data);
});

app.get(
  "/data/:pic",
  // validate :pic request param is in the form "PIC <number>"
  validateRequestParams(
    z.object({
      pic: z.string().regex(/^PIC \d+$/),
    }),
  ),
  async (req, res) => {
    const pic = (res.locals.data as PICS).find(
      (item) => item.PIC === req.params.pic,
    );

    if (!pic) {
      res.status(404).send({ error: `pic not found: ${req.params.pic}` });
    } else {
      res.json(pic);
    }
  },
);

if (isProduction) {
  app.use([/^\/lib($|\/)/, /^\/server($|\/)/, "/"], express.static("dist"));
  app.listen(PORT);
}
