import { useState } from 'react';
import './App.css';
import ChatBar from './components/ChatBar';
import Login from './components/pages/login/login';

function App() {
	const [login, setLogin] = useState(false);

	const logged = () => setLogin(!login);
	return (
		<>
			<div className='p-4 h-screen flex items-center justify-center'>
				<Login login={login} />
			</div>
		</>
	);
}

export default App;
