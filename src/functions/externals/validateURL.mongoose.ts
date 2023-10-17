import { ShortenerSchema } from "../../models/index.js";
import { Document, Types } from "mongoose";
import { IShortener } from "../../@types/index.js";
import { Response } from "express";

type Props = {
  response: Response;
  schema:
    | (Document<unknown, {}, IShortener> &
        IShortener & {
          _id: Types.ObjectId;
        })
    | null;
  url?: string;
  alias: string;
};

export default async function validDateShortenURL(props: Props) {
  const { schema, alias, response, url } = props;
  if (schema) {
    await ShortenerSchema.findOneAndUpdate(
      {
        aliases: alias,
      },
      {
        $inc: { clicks: 1 },
      }
    );
    response.redirect(`${url}`);
  } else {
    return response.send({
      error: "Not found",
    });
  }
}
