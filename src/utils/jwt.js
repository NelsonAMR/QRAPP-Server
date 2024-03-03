import { SECRET_KEY } from "../config.js";
import jwt from "jsonwebtoken";

function createToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
}

export default createToken;
