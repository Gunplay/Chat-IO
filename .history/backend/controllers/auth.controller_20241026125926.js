export const signup = (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body;
	} catch (error) {}
	// res.send('signupUser');
	// console.log('signupUser');
};

export const login = (req, res) => {
	res.send('loginUser');
	console.log('loginUser');
};

export const logOut = (req, res) => {
	res.send('logOutUser');
	console.log('logOutUser');
};
