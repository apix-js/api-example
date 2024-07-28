import { Document } from "mongoose";
import { zId } from "lib/helpers/mongooseZod";
import { z } from "zod";

const schema = z.object({
    title: z.string(),
    content: z.string(),
    author: zId.describe("ObjectId:User")
})

export interface IPost extends z.infer<typeof schema>, Document { }

export default {
    name: "Post",
    schema,
    options: {
        timestamps: false
    }
}