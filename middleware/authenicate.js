const jwt = require("jsonwebtoken");
const { users: service } = require("../services");

const { SECRET_KEY } = process.env;

const authenicate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Not authorize2",
      });
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await service.getById(id);
    console.log(user);
    if (!user) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Not authorize1",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    error.status = 401;
    error.message = "Not authorize";
    next(error);
  }
};

module.exports = authenicate;
