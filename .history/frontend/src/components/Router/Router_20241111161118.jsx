export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/sign-in',
		element: <SignIn />,
		// loader: ({ request }) =>
		//   fetch("/api/dashboard.json", {
		//     signal: request.signal,
		//   }),
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/product-page/:id',
		element: <ProductPage />,
	},
	{
		path: '/PageNotFound',
		element: <PageNotFound />,
	},
]);
