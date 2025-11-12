const jwt = require("jsonwebtoken");
const JWT_SECRET = "SECRET_KEY";

function verifyToken(req, res, next) {
    const token = req.cookies.token; // get token from cookie
    if (!token) return res.status(401).send({ status: 401, message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // contains id, Name, role
        next();
    } catch (err) {
        res.status(403).send({ status: 403, message: "Invalid token" });
    }
}

function requireRole(role) {
    return (req, res, next) => {
        if (!req.user) return res.status(401).send({ status: 401, message: "Unauthorized" });
        if (req.user.role !== role)
            return res.status(403).send({ status: 403, message: "Forbidden: Insufficient role" });
        next();
    };
}

module.exports = { verifyToken, requireRole };
    