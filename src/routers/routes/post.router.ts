import Express from "express";
import { v4 as uuidv4 } from "uuid";
import { ShortenerSchema } from "../../models/index.js";

const router = Express.Router();

router.post("/shorten", async (request, response) => {
  const { originalURL, alias } = request.body;
  const baseURL = "https://localhost:3000";
  const urlId = uuidv4();
  //   const url = await findURL(urlId);
  const shortenURL = `${baseURL}/${alias}`;
  new ShortenerSchema({
    originalURL,
    urlID: `${urlId}`,
    clicks: 0,
    date: Date.now(),
    aliases: alias,
  }).save();

  return response.status(200).json(shortenURL);
});

export default router;
