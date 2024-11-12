// src/App.js
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			{/* This will render the component for the current route */}
			<Outlet />
		</div>
	);
}

export default App;
