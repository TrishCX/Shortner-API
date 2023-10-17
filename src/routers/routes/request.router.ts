import Express from "express";
import { findURL, validDateShortenURL } from "../../functions/index.js";

const router = Express.Router();

router.get("/:alias", async (request, response) => {
  const alias = request?.params.alias as string;
  const db = await findURL(alias);
  const url = db?.originalURL as string;
  await validDateShortenURL({
    schema: db,
    response,
    url,
    alias,
  });
});

export default router;
