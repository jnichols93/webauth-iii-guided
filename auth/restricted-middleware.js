const token = req.headers.authorization;
const jwt = require('jsonwebtoken'); // installed this library
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const { username, password } = req.headers;

  if (token) {
    // check that the token is valid
    const secret = process.env.JWT_SECRET || "is it secret, is it safe?"

    //check that the token id is valid
    jwt.verify(token,secret, (err, decodedToken)=>{
      if (err){
        //bad panda, token has been tampered with
        res.status(401).json({message:"Invalid credentials"});
      } else {
          req.decodedJwt = decodedToken;
          next();
        }
      
    });
  } else{
    res.status(400).json({ message: "No Credentials provided"});
  }
};

// users 

// roles

// can a user have more than one role

// can a role be assigned to more than one user