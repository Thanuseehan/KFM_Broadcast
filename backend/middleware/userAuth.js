import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const token = req.cookies?.token; // Ensure cookies exist

    if (!token) {
        return res.status(401).json({ success: false, message: "No token found, please log in" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (!tokenDecode || !tokenDecode.id) {
            return res.status(403).json({ success: false, message: "Invalid token, please log in again" });
        }

        req.body.userId = tokenDecode.id;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: "Token verification failed, please log in again" });
    }
};

export default userAuth;
