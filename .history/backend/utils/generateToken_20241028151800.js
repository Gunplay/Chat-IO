import jwt from "jsonwebtoken";

import React from 'react'

const generateTokenAndSetCookie = (userId, res) => {
	 const token = jwt.sign({userId, process.env})
}

export default generateTokenAndSetCookie