import { ApixJs } from '@apixjs/api'
import path from "node:path"

ApixJs.boot({
    logsPath: path.join(process.cwd(), 'logs'),
    modulePath: path.join(process.cwd(), 'modules'),
    server: {
        port: 5000,
        host: "127.0.0.1"
    },
    db: {
        uri: "mongodb://localhost:27017/apix-api",
        schemaOptions: {}
    }
})
