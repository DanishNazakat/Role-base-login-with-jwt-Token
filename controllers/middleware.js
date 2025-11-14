// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "SECRET_KEY";

// function verifyToken(req, res, next) {
//     const token = req.cookies.token; // get token from cookie
//     if (!token) return res.status(401).send({ status: 401, message: "Unauthorized" });

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = decoded; // contains id, Name, role
//         next();
//     } catch (err) {
//         res.status(403).send({ status: 403, message: "Invalid token" });
//     }
// }

// function requireRole(role) {
//     return (req, res, next) => {
//         if (!req.user) return res.status(401).send({ status: 401, message: "Unauthorized" });
//         if (req.user.role !== role)
//             return res.status(403).send({ status: 403, message: "Forbidden: Insufficient role" });
//         next();
//     };
// }

// module.exports = { verifyToken, requireRole };
    


const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.send({ status: 401, message: "Login required" });
    }

    try {
        const decoded = jwt.verify(token, "MY_SECRET_KEY");
        req.user = decoded;
        next();
    } catch (err) {
        res.send({ status: 401, message: "Invalid token" });
    }
}

function verifyAdmin(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.role !== "admin") {
            return res.send({ status: 403, message: "Admin only" });
        }
        next();
    });
}

module.exports = { verifyToken, verifyAdmin };
