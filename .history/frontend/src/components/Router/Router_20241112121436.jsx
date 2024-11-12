// src/components/Router/Router.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/Login';
import { SignUp } from '../pages/signup/SignUp';
import { UserDialog } from '../pages/userDialog';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/chat/message',
				element: <UserDialog />,
			},
		],
	},
]);

export default router;
