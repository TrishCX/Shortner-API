import { Document, Types } from "mongoose";
import { IShortener } from "../../@types/index.js";
import { Response } from "express";
type Props = {
    response: Response;
    schema: (Document<unknown, {}, IShortener> & IShortener & {
        _id: Types.ObjectId;
    }) | null;
    url?: string;
    alias: string;
};
export default function validDateShortenURL(props: Props): Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=validateURL.mongoose.d.ts.map