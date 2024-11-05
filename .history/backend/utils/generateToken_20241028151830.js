import jwt from "jsonwebtoken";

import JWT_SECRET from ''

const generateTokenAndSetCookie = (userId, res) => {
	 const token = jwt.sign({userId, process.env.JWT_SECRET})
}

export default generateTokenAndSetCookie