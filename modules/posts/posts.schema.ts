import { Document } from "mongoose";
import { zId } from "lib/helpers/mongooseZod";
import { z } from "zod";
import { ISchemaExport } from "@apixjs/api";

const schema = z.object({
    title: z.string(),
    content: z.string(),
    author: zId.describe("ObjectId:User")
})

export interface IPost extends z.infer<typeof schema>, Document { }

const posSchema: ISchemaExport<IPost> = {
    name: "Post",
    schema
}
export default posSchema