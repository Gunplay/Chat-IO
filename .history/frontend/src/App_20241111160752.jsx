import './App.css';
import { Home } from './components/pages/home/home';

function App() {
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
