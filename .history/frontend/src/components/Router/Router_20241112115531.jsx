import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/home';


import { SignUp } from '../pages/signup/SignUp';
import { UserDialog } from '../pages/userDialog';
import {Login }
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
		element: ,
	},
	{
		path: '/chat/message',
		element: <UserDialog />,
	},
	// {
	// 	path: '/PageNotFound',
	// 	element: <PageNotFound />,
	// },
]);
