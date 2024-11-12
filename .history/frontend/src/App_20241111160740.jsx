import './App.css';
import { Home } from './components/pages/home/home';
import { BrowserRouter } from 'react-router-dom';
function App() {
	//const loged = () => setLogin(!login);
	return (
		<>
			<div className='p-4 h-screen flex items-center justify-center'>
				{/* <Login login={login} setLogin={setLogin} /> */}
				<BrowserRouter>
					<Home />
				</BrowserRouter>
				{/* <SignUp /> */}
			</div>
		</>
	);
}

export default App;
