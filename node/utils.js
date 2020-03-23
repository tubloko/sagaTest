const jwt = require('jsonwebtoken');

function generateToken(user) {
    if (!user) return null;

    const u = {
        userId: user.userId,
        name: user.name,
        password: user.password,
        isAdmin: user.isAdmin
    };

    const token = jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
    });

    return token;
}

function getCleanUser(user) {
    if (!user) return null;

    return {
        userId: user.userId,
        name: user.name,
        password: user.password,
        isAdmin: user.isAdmin
    };
}

module.exports = {
    generateToken,
    getCleanUser
};
