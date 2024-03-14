const jwtMiddleware = require("express-jwt").expressjwt
module.exports = jwtMiddleware ({ 
    credentialsRequired: false,
    secret: process.env.SECRET,
    algorithms: ["HS256"],
  })
  