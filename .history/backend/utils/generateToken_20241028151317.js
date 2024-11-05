import jwt from "jsonwebtoken";

import React from 'react'

const generateTokenAndSetCookie = (userId, res) => {
	 const toket = jwt.sign({userId, process.env.JWT_SECRET})
}

export default generateTokenAndSetCookie