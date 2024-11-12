import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/Login';
import { SignUp } from '../pages/signup/SignUps';
import user
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
		// loader: ({ request }) =>
		//   fetch("/api/dashboard.json", {
		//     signal: request.signal,
		//   }),
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/chat/message',
		element: ,
	},
	// {
	// 	path: '/PageNotFound',
	// 	element: <PageNotFound />,
	// },
]);
