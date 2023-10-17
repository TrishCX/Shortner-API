import { ShortenerSchema } from "../../models/index.js";

export default async function findURL(initialAlias: string) {
  const server = await ShortenerSchema.findOne({ aliases: initialAlias });
  return server;
}
