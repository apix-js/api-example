import app from '@apixjs/api'

app.boot({
    logsPath: import.meta.dirname + "/logs",
    modulePath: import.meta.dirname + "/modules",
    server:{
        port: 5000,
        host: "127.0.0.1"
    },
    db: {
        uri: "mongodb://localhost:27017/apix-api",
        schemaOptions: {}
    }
})