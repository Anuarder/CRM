module.exports = {
    port: process.env.PORT || 8081,
    database_url: "mongodb://localhost/DreamCity",
    secret: process.env.SECRET ||'superSecret',
}