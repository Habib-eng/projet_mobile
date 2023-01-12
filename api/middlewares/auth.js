const jwt = require('jwt-simple');
module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.decode(token,process.env.JWT_SECRET);
        next()   
    } catch (e) {
        res.status(401).send("You are Not authorized to access this resource");
    }
}