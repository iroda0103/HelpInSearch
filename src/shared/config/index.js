require('dotenv')

module.export={
    port:process.env.PORT,
    db:{
        name:process.env.DB_NAME,
        port:process.env.DB_PORT,
        host:process.env.DB_HOST,
        password:process.env.DB_PASSWORD
    },
    jwt:{
        secret:process.env.JWT_SECRET
    }
}