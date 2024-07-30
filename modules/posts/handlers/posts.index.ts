// import createHandler from "lib/helpers/createHandler";

import { createHandler } from '@apixjs/api'

export default createHandler({
    path: "/",
    method: "GET",
    schema: {
        description: 'Get a user by ID',
        tags: ['users'],
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' }
                }
            }
        }
    },
    handler: async () => {
        return {
            msg: "posts"
        }
    }
})