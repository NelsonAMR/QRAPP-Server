const validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res
      .status(401)
      .json({ message: "Token not found, authorization denied" });

  next();
};

export default validateToken;
