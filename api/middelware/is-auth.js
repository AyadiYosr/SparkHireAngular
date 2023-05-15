const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error("Not authenticated ! Please Log in");
        error.statusCode = 401;
        next(error);
    }
    else {
        const token = authHeader.split(' ')[1];

        let decodedToken;
        try {
            decodedToken = jwt.verify(token, 'supersecretcode') // decode and verify
            if (!decodedToken) {
                const error = new Error("Not authenticated !");
                error.statusCode = 401;
                next(error);
            }
            next();
        }
        catch (err) {
            res.status(401).json({ err });
        }

    }
}