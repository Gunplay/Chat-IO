import './App.css';
import ChatBar from './components/ChatBar';
import Login from './components/pages/login/login';

function App() {
	return (
		<>
			<ChatBar />
			<div className='p-4 h-screen flex items-center justify-start'>
				<Login />
			</div>
		</>
	);
}

export default App;
