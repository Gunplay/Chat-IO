import './App.css';
import ChatBar from './components/ChatBar';
import Login from './components/pages/login/login';

function App() {
	return (
		<>
			<ChatBar />
			<div className='p-4 flex items-center justify-center'>
				<Login />
			</div>
		</>
	);
}

export default App;
