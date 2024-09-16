import { readFile } from "node:fs/promises";

import { __dirname } from "./esModule.js";
import { PICS } from "./pic.js";

export const readData = async () => {
  const data = JSON.parse(
    await readFile(`${__dirname}/SampleData.json`, "utf8"),
  );
  return PICS.parse(data);
};
