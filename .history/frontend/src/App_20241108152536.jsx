import { useState } from 'react';
import './App.css';
import { SignUp } from './components/pages/signup/SignUp';
import ChatBar from './components/ChatBar';
import { Home } from './components/pages/home/home';
function App() {
	const [login, setLogin] = useState(false);

	//const loged = () => setLogin(!login);
	return (
		<>
			<div className='p-4 h-screen flex items-center justify-center'>
				{/* <Login login={login} setLogin={setLogin} /> */}
				<Home />
				{/* <SignUp /> */}
			</div>
		</>
	);
}

export default App;
